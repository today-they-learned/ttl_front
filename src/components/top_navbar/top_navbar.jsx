import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Icon, Dropdown, Button } from 'semantic-ui-react';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
  z-index: 1;
  box-shadow: 1px 1px 10px -5px black;
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

const TopNavbar = () => {
  const { user } = useSelector((state) => state.authentication);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.replace('/');
  };

  const handleMypage = () => {
    window.location.replace('/mypage');
  };

  const handleSetting = () => {
    window.location.replace('/setting');
  };
  return (
    <Nav>
      {/* 로고 대신 텍스트로 우선 작성 */}
      <Link to="/">
        <h1>TTL</h1>
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="search" style={{ fontSize: '1.5rem' }} />
        {user ? (
          <>
            <Icon name="pencil alternate" style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
            <Avatar src="images/avatar.png" />
            {/* 임시 유저 아이콘 */}
            <Dropdown direction="left">
              <Dropdown.Menu style={{ marginTop: '1.3rem' }}>
                <Dropdown.Item onClick={handleMypage}>
                  <DropText>프로필</DropText>
                </Dropdown.Item>
                <Dropdown.Item>
                  <DropText>글쓰기</DropText>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleSetting}>
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
            <Button>로그인</Button>
          </Link>
          // 임시
        )}
      </div>
    </Nav>
  );
};

export default TopNavbar;
