import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import AdminPage from './views/AdminPage';

const List = styled.ul`
  list-style: none;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
         <List>
           <li>
             <Link to="/admin">Admin</Link>
           </li>
         </List>
         <Route path="/admin" component={AdminPage} />
      </div>
    );
  }
}

export default App;
