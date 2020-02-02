import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminMenuContainer = styled.div`
	display: flex;
	width: 555px;

	a {
		display: inline-block;
		padding: 15px 20px 15px;
		font-size: 16px;
		text-decoration: none;
		color: #fff;
	}
`;

const AdminMenu = ({ isAdmin = false }) => {
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
