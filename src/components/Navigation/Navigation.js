import React from 'react';

import NavItem from './NavItem';
import * as styled from './Navigation.styled';

const navigation = [
  {
    title: 'Features',
    href: '/features',
    subitems: [
      {
        title: 'Feature A',
        href: '/dynamic/[entryId]',
        as: '/dynamic/feature-a',
      },
      { title: 'Feature B', href: '/dynamic/[entryId]' },
    ],
  },
  {
    title: 'Prices',
    href: '/prices',
    subitems: [
      { title: 'Price A', href: '/prices/price-a' },
      { title: 'Price B', href: '/prices/price-b' },
    ],
  },
  {
    title: 'Documentation',
    href: '/documentation',
    subitems: [
      { title: 'Documentation A', href: '/doc/doc-a' },
      { title: 'Documentation B', href: '/doc/doc-b' },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
];

const Navigation = () => {
  return (
    <styled.Container>
      <h2>Home</h2>
      <styled.Nav>
        <styled.Navbar>
          {navigation.map(item => (
            <NavItem key={item.title} item={item} />
          ))}
        </styled.Navbar>
      </styled.Nav>
    </styled.Container>
  );
};

export default Navigation;
