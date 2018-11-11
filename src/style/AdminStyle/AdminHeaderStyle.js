import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 2px solid #FF8F33;
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;

export const HeaderLink = styled(Link)`
  display: block;
  padding: 20px;
  font-size: 18px;
  color: #FF5122;
`;
