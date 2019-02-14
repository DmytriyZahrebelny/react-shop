import styled from 'styled-components';

export const ListProduct = styled.ul`
  position: relative;
  list-style: none;
`;

export const DeleteElement = styled.button`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 20px auto 0;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;
  background-color: #ffffff;
  border: 2px solid #FB4128;
  border-radius: 24px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: #FF5122;
    color: #ffffff;
  }
`;