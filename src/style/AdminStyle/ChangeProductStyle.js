import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListProducts = styled.ul`
  position: relative;
  list-style: none;
`;

export const ItemProduct = styled.li`
  display: inline-block;
  width: 265px;
  padding: 4px 0;
  margin: 10px 10px 20px;
`;

export const ProductName = styled.span`
  display: block;
  font-size: 16px;
  color: #EB6300;
  text-align: center;
`;

export const ChangeProductInput = styled(Link)`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 20px auto 0;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;
  border: 2px solid #FB4128;
  border-radius: 24px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: #FF5122;
    color: #ffffff;
  }
`;

export const ProductImg = styled.img`
  width: 265px;
  height: 265px;
  margin-bottom: 20px;
`;
