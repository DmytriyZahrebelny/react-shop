import styled from 'styled-components';
import { Link } from 'react-router-dom';

// shopPage

export const ShopContainer = styled.div`
  display: flex;
`;

// ShopMenu

export const ShopMenu = styled.ul`
  width: 260px;
  padding: 0;
  list-style: none;
`;

export const ShopLink = styled(Link)`
  display: block;
  padding: 20px;
  font-size: 18px;
  color: #FB4128;
  text-decoration: none;
`;

//MobileShop

export const ProductLink = styled(Link)`
  display: block;
  width: 265px;
  padding: 20px 20px 0;
  text-decoration: none;
`;

export const ProductImg = styled.img`
  width: 265px;
`;

export const MobilePlace = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 960px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ProductName = styled.p`
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  color: #FF8F33;
`;

export const ProductPrice = styled.p`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;

  :hover {
    background-color: #ffffff;
    color: red;
  }
`;

export const ProductButtonContiner = styled.p`
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

// ProductPage

export const ProductInfo = styled.div`
  display: flex;
  width: 750px;
  justify-content: space-between;
  padding: 20px 0;
`;

export const ProductTitle = styled.h1`
  color: #FB4128;
`;

export const ProductDescription = styled.p`
  width: 400px;
  color: #FF8F33;
`;

export const ProductButton = styled(Link)`
  display: block;
  width: 200px;
  padding: 10px 20px;
  margin: 50px 0 0 0;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  color: #FB4128;
  border: 2px solid #FB4128;
  border-radius: 24px;

  :hover {
    background-color: #ffffff;
  }
`;