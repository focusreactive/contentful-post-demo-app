import { getEntry } from './contentful-client';
import { selectImages, selectVideos, selectComponents } from './cms-selectors';

// const getIncludedFile = selector => includedFiles => fname => {
//   try {
//     const files = selector(includedFiles);
//     const file = files.find(({ fileName }) => fileName === fname);
//     return file || null;
//   } catch (err) {
//     if (
//       process.env.MACHINE === 'local' ||
//       process.env.NODE_ENV !== 'production'
//     ) {
//       console.error(err);
//     }
//     return null;
//   }
// };

// export const getIncludedImage = getIncludedFile(selectImages);
// export const getIncludedVideo = getIncludedFile(selectVideos);

// export const getIncludedEntry = includedEntries => entryTitle => {
//   try {
//     const entries = selectComponents()(includedEntries);
//     const entry = entries.find(({ fields: { title } }) => title === entryTitle);
//     return entry || null;
//   } catch (err) {
//     if (
//       process.env.MACHINE === 'local' ||
//       process.env.NODE_ENV !== 'production'
//     ) {
//       console.error(err);
//     }
//     return null;
//   }
// };

export const getPage = async entryId => {
  const customPage = await getEntry(entryId);

  const {
    seoTitle,
    seoDescription,
    url,
    pageData,
    headerImage,
    title,
    // includedFiles,
    // includedEntries,
  } = customPage.fields;
  const bgImage = selectImages([headerImage])[0];

  const head = {
    title: seoTitle,
    description: seoDescription,
    canonical: `/${url}`,
  };
  const hero = { bgImage: bgImage && bgImage.url, title };

  return { head, hero, pageData, includedFiles, includedEntries };
};
