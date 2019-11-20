/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { contentfulClient } = require('../src/lib/contentful-client');
const { getRoutes } = require('../src/lib/getRoutes');

const updateMocks = async () => {
  const pages = await getRoutes();
  console.log(`\nFetching CMS pages. (${pages.length} entries found)\n`);
  pages.forEach(async ({ entryId, url }) => {
    try {
      const entry = await contentfulClient.getEntry(entryId, { include: 2 });
      const urlName = url.replace('/', '-');
      const fileName = path.resolve(__dirname, '../mocks', `${urlName}.json`);

      fs.writeFileSync(fileName, JSON.stringify(entry, null, 2));

      console.log(fileName);
    } catch (err) {
      console.error(err);
    }
  });
};

updateMocks();
