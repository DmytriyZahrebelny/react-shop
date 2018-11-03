import styled from 'styled-components';
import { Link } from 'react-router-dom';

// App

export const AppBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
`;

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

// Admin

export const AdminContaine = styled.div`
  display: flex;
`;

export const AdminLinks = styled(Link)`
  display: block;
  font-size: 20px;
  padding: 12px;
  margin-right: 20px;
  color: #FB4128;
  text-decoration: none;

  :visited {
    color: #FB4128;
  };
`

export const AdminMenu = styled.div`
  width: 260px;
`

// Products

export const ListProduct = styled.ul`
  position: relative;
  list-style: none;
`;

export const ItemProduct = styled.li`
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

// ProductForm

export const FormContainer = styled.ul`
  width: 600px;
  margin: 40px auto 0 auto;
  list-style: none;
`

export const ListField = styled.ul`
  position: absolute;
  content: "";
  width: 500px;
  height: 500px;
  left: 312px;
  top: 0;
  list-style: none;
`;

export const ItemField = styled.li`
  margin: 0 0 15px 0; 
`;

export const CurrentValue = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #FFD933;
`;

export const ItemParam = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #FF8F33;
`;

export const TextareaField = styled.textarea`
  width: 462px;
  height: 80px;
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
  margin-top: 20px;
  border: 2px solid #FF8F33;
`;

export const InputText = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 6px 0;
`;

export const InputSubmitAdd = styled.input`
  display: block;
  width: 200px;
  margin: 10px auto 0;
  padding: 12px;
  font-size: 18px;
  color: #FF8F33;
  background-color: #ffffff;
  border: 2px solid #FF8F33;
  border-radius: 25px;
`;

export const InputSubmitChange = styled.input`
  display: block;
  width: 161px;
  margin: 10px auto 0;
  padding: 7px;
  font-size: 16px;
  color: #FF8F33;
  background-color: #ffffff;
  border: 2px solid #FF8F33;
  border-radius: 25px;
`;

export const Legend = styled.legend`
  color: #FF8F33;
`

// NewProduct

export const DescriptionsField = styled.textarea`
  width: 562px;
  height: 80px;
  font-size: 16px;
`;

// DeleteProducts

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