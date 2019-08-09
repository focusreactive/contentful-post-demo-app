/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { contentfulClient } = require('../src/lib/contentful-client');
const { getPages } = require('../server/getPages');

const updateMocks = async () => {
  const pages = await getPages();
  console.log(`\nFetching CMS pages. (${pages.length} entries found)\n`);
  pages.forEach(async ({ entryId }) => {
    try {
      const entry = await contentfulClient.getEntry(entryId, { include: 2 });
      const { url } = entry.fields;
      const urlName = url && url.replace('/', '-');
      const contentType = entry.sys.contentType.sys.id;
      const sameEntryId = entry.sys.id;
      const fileName = path.resolve(
        __dirname,
        '../mocks',
        `${urlName || `${contentType}-${sameEntryId}`}.json`
      );
      fs.writeFileSync(fileName, JSON.stringify(entry, null, 2));
      console.log(fileName);
    } catch (err) {
      console.error(err);
      console.log('entryId', entryId);
    }
  });
};

updateMocks();
