import { getEntry } from './contentful-client';
import { selectImages, selectTemplate } from './cms-selectors';

export const getPage = async entryId => {
  const customPage = await getEntry(entryId);

  const {
    url,
    title,
    seoTitle,
    seoDescription,
    headerImage,
    template,
  } = customPage.fields;
  const headerBackground = selectImages([headerImage])[0];

  const page = {
    title: seoTitle,
    description: seoDescription,
    canonical: `/${url}`,
  };
  const header = {
    background: headerBackground && headerBackground.url,
    title,
  };
  const content = selectTemplate(template);

  return { page, header, content };
};
