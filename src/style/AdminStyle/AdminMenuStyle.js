import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminMenuContainer = styled.div`
  width: 260px;
`;

export const AdminMenuLinks = styled(Link)`
  display: block;
  font-size: 20px;
  padding: 12px;
  margin-right: 20px;
  color: #FB4128;
  text-decoration: none;

  :visited {
    color: #FB4128;
  };
`;