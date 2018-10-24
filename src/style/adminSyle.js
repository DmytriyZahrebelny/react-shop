import styled from 'styled-components';
import { Link } from 'react-router-dom';

// DeleteProducts

export const AdminLinks = styled(Link)`
  font-size: 20px;
  margin-right: 20px;

  :visited {
    color: black;
  };
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
  font-size: 16px;
  color: black;

  :visit {
    color: black;
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
  left: 400px;
  top: 0;
  list-style: none;
`;

export const ItemField = styled.li`
  margin: 0 0 15px 0; 
`;

export const CurrentValue = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

export const ItemParam = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const TextareaField = styled.textarea`
  width: 462px;
  height: 80px;
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
  margin-top: 20px;
`;

export const InputText = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 6px 0;
`;

export const InputSubmit = styled.input`
  margin-top: 10px;
`;

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