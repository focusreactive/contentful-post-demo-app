import React from 'react';

import { getPage } from '../lib/getPage';
import renderTemplate from '../lib/renderTemplate';
import Layout from '../components/Layout';

const entryId = '7iaB95RCl0IH3Z73ON1hBq';

const App = ({ page, header, content }) => {
  return (
    <Layout page={page} header={header}>
      {renderTemplate(content)}
    </Layout>
  );
};

App.getInitialProps = async ({ isServer, query }) => {
  const pageModel = await getPage(entryId);
  return { isServer, ...pageModel, query };
};

export default App;
