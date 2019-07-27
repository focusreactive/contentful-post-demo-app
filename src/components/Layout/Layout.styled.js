import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

export const global = theme => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Raleway-Black';
        src: url('/static/fonts/raleway/Raleway-Black.ttf') format('truetype');
        font-weight: bolder;
      }

      @font-face {
        font-family: 'Quicksand-Regular';
        src: url('/static/fonts/quicksand/Quicksand-Regular.ttf')
          format('truetype');
        font-weight: bolder;
      }
      body {
        margin: 0;
        color: ${theme.text};
        font-family: 'Quicksand-Regular', Arial, sans-serif;
        font-size: 16px;
      }
      h1,
      h2,
      h3 {
        font-family: 'Raleway-Black', Arial, sans-serif;
      }

      ::selection {
        background: ${theme.selection};
      }
    `}
  />
);
// color: ${({ theme }) => theme.text};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const Navigation = styled.div`
  flex: none;
  background-color: ${({ theme }) => theme.accentSecondary};
`;

export const Header = styled.header`
  flex: none;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 20hv;
`;

export const Main = styled.main`
  flex-grow: 1;
  height: auto;
  padding: 0px ${({ theme }) => theme.hPadding}px;
`;

export const Footer = styled.footer`
  flex: none;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;
