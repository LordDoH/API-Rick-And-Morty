import React from 'react';
// Styled Components
import styled from 'styled-components';

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
      <Logo
        src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
        alt="logo"
      />
    </HeaderMain>
  );
}

export default Header;
