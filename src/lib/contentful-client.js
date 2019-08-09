// lib/contentful-client.js

const { createClient } = require('contentful');

const { SPACE, DELIVERY_TOKEN, PREVIEW_TOKEN } = require('./contentful-config');
// const { getLocalMocks } = require('./getLocalMocks');

const isProduction = process.env.NODE_ENV === 'production';
// const isLocalMocks = !!process.env.LOCAL;

const contentfulClient = createClient({
  host: isProduction ? 'cdn.contentful.com' : 'preview.contentful.com',
  accessToken: isProduction ? DELIVERY_TOKEN : PREVIEW_TOKEN,
  space: SPACE,
});

const getEntry = entryId => {
  // if (isLocalMocks) {
  //   const entryData = getLocalMocks(entryId);
  //   return entryData;
  // }
  return contentfulClient.getEntry(entryId, { include: 2 });
};

module.exports = { contentfulClient, getEntry };
