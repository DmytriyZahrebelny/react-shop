import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShopMenuContainer = styled.ul`
  width: 260px;
  padding: 0;
  list-style: none;
`;

export const ShopMenuLink = styled(Link)`
  display: block;
  padding: 20px;
  font-size: 18px;
  color: #FB4128;
  text-decoration: none;
`;
