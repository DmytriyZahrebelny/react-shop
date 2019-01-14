import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  width: 1200px;
  padding: 20px 0;
  margin: 10px auto 0;
  background-color: #ffffff;
`;

export const ProductTitle = styled.h1`
  color: #FB4128;
`;

export const ProductDescription = styled.p`
  width: 400px;
  color: #FB4128;
`;

export const Button = styled.a`
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
    color: #ffffff;
    background-color: #FF5122;
  }
`;

export const ProductPrice = styled.p`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FB4128;
`;

export const ProductImg = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  margin: 20px 45px 0;
`;