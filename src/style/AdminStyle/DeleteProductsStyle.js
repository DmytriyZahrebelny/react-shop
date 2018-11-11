import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListProduct = styled.ul`
  position: relative;
  list-style: none;
`;

export const Product = styled.li`
  padding: 10px;
`;

export const LinkProduct = styled(Link)`
  display: inline-block;
  padding: 4px 0;
  font-size: 16px;
  color: black;
  color: #EB6300;
  text-decoration: none;

  :visit {
    color: #EB6300;
  }
 }
`;

export const DeleteElement = styled.a`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: red;

  :hover {
    cursor: pointer;
  }
`;