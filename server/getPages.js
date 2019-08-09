const { contentfulClient } = require('../src/lib/contentful-client');

let cmsPages = [];

const selectId = item => item.sys.id;
const selectUrl = item => `/${item.fields.url.toLowerCase()}`;

const getDynamicRoutes = url =>
  contentfulClient
    .getEntries({
      content_type: 'page',
      include: 1,
      ...(url && { 'fields.url': url }),
    })
    .then(
      response =>
        response.items &&
        response.items.map(i => ({
          entryId: selectId(i),
          url: selectUrl(i),
        }))
    );

const refreshRoutes = async () => {
  cmsPages = await getDynamicRoutes();
};

refreshRoutes();

const getPages = async () => {
  await refreshRoutes();
  return cmsPages;
};

module.exports = { getPages };
