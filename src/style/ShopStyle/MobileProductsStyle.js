import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px 30px;
  width: 1160px;
  padding: 0 20px;
  margin: 10px auto 0;
  list-style: none;
  background-color: #ffffff;
`;

export const ProductItem = styled.li`
  margin: 20px 0;
  padding-bottom: 20px;

  :hover {
    box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
  }
`;

export const ProductLink = styled(Link)`
  display: block;
  padding: 20px 0;
  text-decoration: none;
`;

export const ProductName = styled.p`
  min-height: 37px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  color: #FF8F33;
`;

export const Button = styled.p`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;
  border: 2px solid #FB4128;
  border-radius: 24px;
  cursor: pointer;

  :hover {
    background-color: #FF5122;
    color: #ffffff;
  }
`;

export const ProductImg = styled.img`
  width: 265px;
  height: 265px;
`;