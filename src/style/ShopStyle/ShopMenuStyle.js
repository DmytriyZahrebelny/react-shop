import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShopMenuContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 1200px;
  height: 750px;
  padding: 0;
  margin: 20px auto;
  list-style: none;
  background-color: #ffffff;
`;

export const ShopMenuLink = styled(Link)`
  display: block;
  width: 200px;
  height: 250px;
  padding: 20px;
  font-size: 22px;
  text-align: center;
  color: #FB4128;
  text-decoration: none;
`;
