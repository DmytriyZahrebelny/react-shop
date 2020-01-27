import React from 'react';
import styled from 'styled-components';

const NothingFoundContainer = styled.div`
	width: 1200px;
	min-height: 800px;
	margin: 10px auto 0;
	background-color: #ffffff;
`;

const NothingFoundTitle = styled.h1`
	padding: 40px;
	margin: 0;
`;

const NothingFound = () => (
	<NothingFoundContainer>
		<NothingFoundTitle>Nothing found</NothingFoundTitle>
	</NothingFoundContainer>
);

export default NothingFound;
