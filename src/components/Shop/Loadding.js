import React from 'react';
import styled from 'styled-components';

export const LoaddingContainer = styled.div`
	width: 1200px;
	min-height: 800px;
	margin: 10px auto 0;
	background-color: #ffffff;
`;

export const Loadding = styled.h1`
	padding: 40px;
	margin: 0;
`;

const loadding = () => (
	<LoaddingContainer>
		<Loadding>Loadding...</Loadding>
	</LoaddingContainer>
);

export default loadding;
