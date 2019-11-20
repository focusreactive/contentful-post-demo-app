import React from 'react';

import { getPage } from '../../lib/getPage';
import renderTemplate from '../../lib/renderTemplate';
import Layout from '../../components/Layout';

const App = ({ page, header, content, query, isServer }) => {
  return (
    <Layout page={page} header={header}>
      {renderTemplate(content, { query, isServer })}
    </Layout>
  );
};

App.getInitialProps = async ({ isServer, query }) => {
  const { entryId } = query;
  const pageModel = await getPage(entryId);
  return { isServer, ...pageModel, query };
};

export default App;
