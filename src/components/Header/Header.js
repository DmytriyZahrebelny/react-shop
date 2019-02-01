import React, { PureComponent } from 'react';
import { HeaderContainer } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';

class Header extends PureComponent {
  render() {
    console.log('render')
    return (
      <HeaderContainer>
        <TopHeader />
        <HeaderMenu />
      </HeaderContainer>
    );
  }
}

// const Header = () => {
//   console.log('render')
//   return (
//     <HeaderContainer>
//       <TopHeader />
//       <HeaderMenu />
//     </HeaderContainer>
//   );
// }

export default Header;
