/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import * as styled from './Navigation.styled';
import '@reach/menu-button/styles.css';

const doNothing = () => {};

const NavItem = ({ item }) => {
  return (
    <styled.NavItem>
      {item.subitems ? (
        <styled.Menu>
          <styled.MenuButton>{item.title}</styled.MenuButton>
          <styled.MenuList>
            {item.subitems.map(sub => (
              <styled.MenuItem key={sub.title} onSelect={doNothing}>
                <Link as={sub.as} href={sub.href}>
                  <a>{sub.title}</a>
                </Link>
              </styled.MenuItem>
            ))}
          </styled.MenuList>
        </styled.Menu>
      ) : (
        <styled.SingleButton>{item.title}</styled.SingleButton>
      )}
    </styled.NavItem>
  );
};

export default NavItem;
