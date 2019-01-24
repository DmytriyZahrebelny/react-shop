import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
`;

export const ShopMenu = styled.div`
  width: 400px;
`;

export const HeaderMenuLink = styled(Link)`
  display: inline-block;
  padding: 15px 20px 15px;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
`;

export const AuthLink = styled(Link)`
  display: block;
  padding: 5px 20px 5px;
  margin: 10px 10px 0;
  height: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #000;
  border-radius: 10px;
  background-color: #fff;
`;

