const PREBUILD_DATA_BLOCK = 'prebuiltDataBlock';

const selectMediaContentType = contentTypes => mediaReferences => {
  try {
    return mediaReferences
      .filter(
        ({ fields: { file } }) =>
          !contentTypes || contentTypes.includes(file.contentType)
      )
      .map(({ fields: { file: { url, fileName, contentType }, title } }) => ({
        url,
        title,
        fileName,
        contentType,
      }));
  } catch (err) {
    return [];
  }
};

export const selectImages = selectMediaContentType([
  'image/png',
  'image/jpeg',
  'image/svg+xml',
]);
export const selectVideos = selectMediaContentType(['video/mp4', 'video/webm']);
export const selectDocuments = selectMediaContentType(['application/pdf']);
export const selectFiles = selectMediaContentType();

export const PREBUILD_DATA_TYPES = {
  headerBadge: 'Header Badge',
  SocialButtons: 'Social Buttons',
  descriptionDialog: 'Description Dialog',
  PageDisplayOptions: 'Page display options',
};

export const selectOptions = types => references => {
  try {
    return references
      .filter(
        ({
          sys: {
            contentType: {
              sys: { id },
            },
          },
          fields: { type },
        }) => id === PREBUILD_DATA_BLOCK && types.includes(type)
      )
      .map(({ fields }) => ({
        ...fields,
        files: selectFiles(fields.mediaReference),
        mediaReference: undefined,
      }));
  } catch (err) {
    return [];
  }
};

export const hasOption = type => options =>
  options.find(fields => fields.type === type);

export const getBadgeOption = selectedOptions => {
  const option = selectedOptions.find(
    fields => fields.type === PREBUILD_DATA_TYPES.headerBadge
  );
  return option ? { ...option.files[0], ...option.data } : null;
};

export const getDisplayOption = selectedOptions => {
  const option = selectedOptions.find(
    fields => fields.type === PREBUILD_DATA_TYPES.PageDisplayOptions
  );
  return option ? { ...option.data } : {};
};

const componentContentTypes = [
  'componentsDescriptionBlock',
  'component',
  'componentsVideo',
  'componentsQuote',
];

export const selectComponents = (
  contentTypes = componentContentTypes
) => references => {
  try {
    return references.filter(({ sys: { contentType: { sys: { id } } } }) =>
      contentTypes.includes(id)
    );
  } catch (err) {
    return [];
  }
};
