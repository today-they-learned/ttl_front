import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Icon, Dropdown } from 'semantic-ui-react';
import COLOR from 'constants/color.constant';
import { darken } from 'polished';

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

const Login = styled.button`
  background: ${COLOR.PRIMARY} !important;
  color: white !important;
  font-family: 'NS-R' !important;
  height: 2rem;
  font-size: 14px !important;
  letter-spacing: 0.1rem;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background: ${darken(0.03, COLOR.PRIMARY)} !important;
  }
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  border-radius: 50%;
`;

const DropText = styled.div`
  font-weight: 500;
`;

const Logo = styled.img`
  width: 7rem;
  height: auto;
`;

const MobileNavbar = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authentication);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.replace('/');
  };

  const trigger = (
    <span>
      <Avatar
        src={user?.user.avatar ? user?.user.avatar : `${process.env.PUBLIC_URL}/images/missing.png`}
        style={{ cursor: 'pointer' }}
      />
    </span>
  );

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
        <Icon name="search" style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />
        {user ? (
          <>
            <Dropdown
              direction="left"
              trigger={trigger}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Dropdown.Menu style={{ marginTop: '1.3rem' }}>
                <Dropdown.Item
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  <DropText>프로필</DropText>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate('/setting');
                  }}
                >
                  <DropText>설정</DropText>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>
                  <DropText>로그아웃</DropText>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <Link to="/signin">
            <Login>로그인</Login>
          </Link>
        )}
      </div>
    </Nav>
  );
};

export default MobileNavbar;
