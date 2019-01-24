import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminMenuContainer = styled.div`
  width: 500px;
`;

export const AdminMenuLinks = styled(Link)`
  display: inline-block;
  padding: 15px 20px 15px;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
`;