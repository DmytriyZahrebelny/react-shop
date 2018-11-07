import styled from 'styled-components';

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 10px 0;
  border-bottom: 2px solid #FB4128;
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
`;

export const ProductPrice = styled.span`
  align-self: center;
  font-size: 20px;
  color: #FF8F33;
`;
