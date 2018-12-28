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
  color: #FF8F33;
  text-align: center;
`;

export const ProductPrice = styled.span`
  align-self: center;
  font-size: 20px;
  color: #FF8F33;
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
  margin: 45px 0 45px 21px;
  font-size: 24px;
  color: #ffffff;
`;

export const Button = styled.input`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;
  background-color: inherit;
  border: 2px solid #FB4128;
  border-radius: 24px;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
    color: red;
  }
`;

