import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AppBox, Header, HeaderLink, HeaderNav } from './style/adminSyle';
import AdminPage from './views/AdminPage';

class App extends Component {
  render() {
    return (
      <AppBox className="App">
        <Header>
           <HeaderNav>
             <li>
               <HeaderLink to="/admin">Admin</HeaderLink>
             </li>
           </HeaderNav>
         </Header>
         <main>
           <Route path="/admin" component={AdminPage} />
         </main>
      </AppBox>
    );
  }
}

export default App;
