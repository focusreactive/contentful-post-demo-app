import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px ${({ theme }) => theme.hPadding}px;
  background: ${({ background }) =>
    background ? `url(${background})` : 'none'};
  background-size: cover;
  background-position: center;
  height: ${({ background }) => (background ? '300px' : '150px')};
  overflow: hidden;

  h1 {
    font-size: ${({ background }) => (background ? '92px' : '42px')};
    ${({ background, theme }) =>
      background
        ? `
      background-color: ${theme.accentSecondaryOpacity};
      box-shadow: 0 0 200px 200px ${theme.accentSecondaryOpacity};
    `
        : ''};
  }
`;
