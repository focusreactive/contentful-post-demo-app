import styled from '@emotion/styled';
import * as reach from '@reach/menu-button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.hPadding}px;
`;

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0px;
`;

export const NavItem = styled.li`
  margin-left: 20px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuButton = styled(reach.MenuButton)`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.text};
  height: 100%;
  font-family: 'Quicksand-Regular', Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export const MenuList = styled(reach.MenuList)`
  border: none;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  font-family: 'Quicksand-Regular', Arial, sans-serif;
  font-size: 16px;
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export const SingleButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.text};
  height: 100%;
  font-family: 'Quicksand-Regular', Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export const { MenuItem, MenuLink, Menu } = reach;
