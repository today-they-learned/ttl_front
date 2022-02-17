import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Dropdown } from 'semantic-ui-react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.8rem 1rem 0.8rem 3rem;
  margin-bottom: 4rem;
  z-index: 1;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: black;
  /* 동그라미 확인용 */
`;

const DropText = styled.div`
  font-weight: 500;
`;

const Logo = styled.img`
  width: 7rem;
  height: auto;
`;

const MobileNavbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={`${process.env.PUBLIC_URL}/images/Logo.gif`} alt="logo" />
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="search" style={{ fontSize: '1.5rem' }} />
        <Avatar src="images/avatar.png" />
        {/* 임시 유저 아이콘 사용 */}

        <Dropdown direction="left">
          <Dropdown.Menu style={{ marginTop: '1.3rem' }}>
            <Dropdown.Item>
              <DropText>프로필</DropText>
            </Dropdown.Item>
            <Dropdown.Item>
              <DropText>설정</DropText>
            </Dropdown.Item>
            <Dropdown.Item>
              <DropText>로그아웃</DropText>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Nav>
  );
};

export default MobileNavbar;
