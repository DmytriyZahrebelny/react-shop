import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminMenuContainer = styled.div`
	width: 500px;

	a {
		display: inline-block;
		padding: 15px 20px 15px;
		font-size: 16px;
		text-decoration: none;
		color: #fff;
	}
`;

const AdminMenu = ({ isAdmin = true }) => {
	if (isAdmin) {
		return (
			<AdminMenuContainer>
				<Link to='/admin/change'>Change parameters</Link>
				<Link to='/admin/add'>Add new product</Link>
				<Link to='/admin/delete'>Delete product</Link>
			</AdminMenuContainer>
		);
	}

	return null;
};

export default AdminMenu;
