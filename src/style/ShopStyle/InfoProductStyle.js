import styled from 'styled-components';

export const Product = styled.div`
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
    background-color: #ffffff;
  }
`;

export const ProductPrice = styled.p`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;
`;

export const ProductImg = styled.img`
  display: block;
  width: 265px;
  height: 265px;
  margin-right: 20px;
`;