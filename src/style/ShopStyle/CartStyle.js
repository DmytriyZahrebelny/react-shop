import styled from 'styled-components';

export const Product = styled.li`
  display: flex;
  justify-content: space-between;
  width: 630px;
  padding: 10px 0;
  border-bottom: 2px solid #FB4128;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 930px;
  min-height: 800px;
  margin: 10px auto 0;
  padding: 10px;
  background-color: #ffffff;
`;

export const ProductImg = styled.img`
  display: block;
  width: 130px;
  height: 130px;
`;

export const ProductDescriptions = styled.span`
  width: 400px;
  align-self: center;
  font-size: 20px;
  color: #000000;
  text-align: center;
`;

export const ProductPrice = styled.span`
  align-self: center;
  font-size: 20px;
  color: #000000;
`;

export const AmountProduct = styled.input`
  width: 140px;
  align-self: center;
  font-size: 20px;
  text-align: center;
  color: #000000;
  background-color: inherit;
  border: none;
`;

export const ListProducts = styled.ul`
  margin: 0;
  padding: 0;
`;

export const AllPrice = styled.div`
  width: 250px;
`;

export const ToPayText = styled.b`
  display: block;
  margin: 45px 0;
  font-size: 24px;
  text-align: center;
  color: #000000;
`;

export const Button = styled.input`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  font-size: 20px;
  text-align: center;
  color: #FB4128;
  background-color: inherit;
  border: 2px solid #FB4128;
  border-radius: 24px;
  cursor: pointer;

  :hover {
    background-color: #FF5122;
    color: #ffffff;
  }
`;

