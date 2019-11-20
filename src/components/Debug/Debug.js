import React from 'react';
import { useRouter } from 'next/router';

import { ContentContainer } from '../Layout/Layout.styled';

const Debug = () => {
  const router = useRouter();
  // const { log } = console;
  // log('Debug -> router', router);
  return (
    <ContentContainer>
      <code>{JSON.stringify(router, null, 2)}</code>
    </ContentContainer>
  );
};

export default Debug;
