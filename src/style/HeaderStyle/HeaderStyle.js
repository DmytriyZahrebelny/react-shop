import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #FF5122;
`;

export const TopHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  padding: 15px 0;
  margin: 0 auto;
  list-style: none;
  border-bottom: 1px solid #ffffff;
`;

export const HeaderLink = styled(Link)`
  display: block;
  padding: 20px 20px 0;
  font-size: 22px;
  text-decoration: none;
  color: #ffffff;
`;

export const TextField = styled.input`
  width: 250px;
  padding: 8px 0 8px 20px;
  margin-top: 8px;
  font-size: 18px;
  border: none;
  border-radius: 40px;
`;