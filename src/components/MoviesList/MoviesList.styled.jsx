import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled(Link)`

  padding: 5px;
  color: rgba(0, 0, 0);
  text-decoration: none;



  &:hover,
  &:focus {

    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    color: #02c59b;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
