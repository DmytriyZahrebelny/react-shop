import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListProducts = styled.ul`
  position: relative;
  list-style: none;
`;

export const ItemProduct = styled.li`
  padding: 10px;
`;

export const LinkProduct = styled(Link)`
  display: inline-block;
  width: 300px;
  padding: 4px 0;
  font-size: 16px;
  color: black;
  color: #EB6300;
  text-decoration: none;

  :visit {
    color: #EB6300;
  }
 }
`;
