import React from 'react';
// Styled Components
import styled from 'styled-components';
import logo from './RicknMorty.png';

const HeaderMain = styled.div`
  height: 150px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 100px;
`;

function Header() {
  return (
    <HeaderMain>
      <Logo src={logo} alt="logo" />
    </HeaderMain>
  );
}

export default Header;
