import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShopMenuContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 1200px;
  padding: 0;
  margin: 20px auto;
  list-style: none;
`;

export const ShopMenuLink = styled(Link)`
  display: block;
  width: 200px;
  height: 350px;
  padding: 20px;
  font-size: 18px;
  text-align: center;
  color: #FB4128;
  background-color: #ffffff;
  text-decoration: none;
`;
