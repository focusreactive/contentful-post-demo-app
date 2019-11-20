/* eslint-disable no-console */
const { createServer } = require('http');
const { parse } = require('url');
const path = require('path');
const next = require('next');

const { getRoutes } = require('../src/lib/getRoutes');

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '../src');
const app = next({ dev, dir });
const handle = app.getRequestHandler();

let dynamicRoutes = [];
const updateRoutes = async () => {
  dynamicRoutes = await getRoutes();
  console.log('[dynamic routes are loaded]');
};

app
  .prepare()
  .then(updateRoutes)
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      const cmsPage = dynamicRoutes.find(({ url }) => url === pathname);
      if (cmsPage) {
        app.render(req, res, '/_dynamic', {
          ...query,
          entryId: cmsPage.entryId,
        });
        return;
      }
      handle(req, res, parsedUrl);
    }).listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  });
