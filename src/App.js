import React from 'react';
import { AppContainer } from './style/AppStyle/AppStyle';
import Header from './components/Header/Header';
import Shop from './views/Shop';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Shop />
    </AppContainer>
  );
}

export default App;
