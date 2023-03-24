import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 18px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 5px 0;
  margin-bottom: 18px;
  border-bottom: 8px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #0a0a0a;
  font-weight: 500;

  &.active {
    color: #201e1e;
    background-color: #00ffaa;
  }
`;
