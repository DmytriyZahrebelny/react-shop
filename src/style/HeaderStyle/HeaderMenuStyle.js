import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderMenu = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`;

export const HeaderMenuLink = styled(Link)`
  display: block;
  padding: 0 20px 20px;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
`;

