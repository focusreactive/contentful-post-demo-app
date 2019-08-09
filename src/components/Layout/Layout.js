import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../theme';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import Debug from '../Debug';
import * as styled from './Layout.styled';

const Layout = ({ children, page, header }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>{page.title}</title>
      <meta name="title" content={page.title} />
      <meta name="description" content={page.description} />
      <link rel="canonical" href={`example.com/${page.canonical}`} />
    </Head>
    <styled.Container>
      {styled.global(theme)}
      <styled.Navigation>
        <Navigation />
      </styled.Navigation>
      <styled.Header>
        <Header {...header} />
      </styled.Header>
      <styled.Main>
        <Debug />
        {children}
      </styled.Main>
      <styled.Footer>
        <Footer />
      </styled.Footer>
    </styled.Container>
  </ThemeProvider>
);

export default Layout;
