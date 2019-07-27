import React from 'react';
import { useRouter } from 'next/router';

const Debug = () => {
  const router = useRouter();
  const { log } = console;
  log('Debug -> router', router);
  return <code>{JSON.stringify(router, null, 2)}</code>;
};

export default Debug;
