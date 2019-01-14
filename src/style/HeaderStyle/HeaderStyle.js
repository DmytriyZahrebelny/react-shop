import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #FF5122;
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  padding: 15px 0;
  margin: 0 auto;
  list-style: none;
`;

export const HeaderLink = styled(Link)`
  display: block;
  padding: 20px;
  font-size: 18px;
  color: #fff;
`;
