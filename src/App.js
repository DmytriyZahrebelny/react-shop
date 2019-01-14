import React from 'react';
import { AppContainer } from './style/AppStyle/AppStyle';
import Header from './components/Header/Header';
import ShopPage from './views/ShopPage';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <ShopPage />
    </AppContainer>
  );
}

export default App;
