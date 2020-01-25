import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';

const AppContainer = styled.div`
	font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
	return (
		<AppContainer className='App'>
			<Header />
		</AppContainer>
	);
};

export default App;
