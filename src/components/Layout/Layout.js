import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../theme';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import Debug from '../Debug';
import * as styled from './Layout.styled';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <styled.Container>
      {styled.global(theme)}
      <styled.Navigation>
        <Navigation />
      </styled.Navigation>
      <styled.Header>
        <Header />
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
