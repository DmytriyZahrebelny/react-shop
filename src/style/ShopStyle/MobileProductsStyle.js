import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsList = styled.ul`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 960px;
padding: 0;
margin: 0;
list-style: none;
`;

export const ProductLink = styled(Link)`
  display: block;
  width: 265px;
  padding: 20px 20px 0;
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