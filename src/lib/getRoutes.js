const { contentfulClient } = require('./contentful-client');

const PAGE_TYPE = 'page';

const selectId = item => item.sys.id;
const selectTitle = item => item.fields.title;
const selectUrl = item => `/${item.fields.url}`;
const selectDate = item => item.sys.createdAt;

const getRoutes = async () => {
  const response = await contentfulClient.getEntries({
    content_type: PAGE_TYPE,
    include: 1,
  });

  const routes = response.items.map(item => ({
    entryId: selectId(item),
    title: selectTitle(item),
    url: selectUrl(item),
    date: selectDate(item),
  }));

  return routes;
};

module.exports = { getRoutes };
