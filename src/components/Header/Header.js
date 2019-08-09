import React from 'react';

import * as styled from './Header.styled';

const Header = ({ title, background }) => (
  <styled.Container background={background}>
    <h1>{title}</h1>
  </styled.Container>
);

export default Header;
