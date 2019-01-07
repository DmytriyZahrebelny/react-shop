import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1200px;
  padding: 0;
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
  width: 265px;
  padding: 20px 0;
  text-decoration: none;
`;

export const ProductName = styled.p`
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
    background-color: #ffffff;
    color: red;
  }
`;

export const ProductImg = styled.img`
  width: 265px;
  height: 265px;
`;