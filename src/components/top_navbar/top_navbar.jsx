import React from 'react';
import styled from 'styled-components';
import { Icon, Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <Nav>
      {/* 로고 대신 텍스트로 우선 작성 */}
      <h1>TTL</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="search" style={{ fontSize: '1.5rem' }} />
        <Icon
          name="pencil alternate"
          style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }}
          onClick={() => {
            navigate('/post');
          }}
        />
        <Avatar src="images/avatar.png" />
        {/* 임시 유저 아이콘 사용 */}

        <Dropdown direction="left">
          <Dropdown.Menu style={{ marginTop: '1.3rem' }}>
            <Dropdown.Item>
              <DropText>프로필</DropText>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                navigate('/post');
              }}
            >
              <DropText>글쓰기</DropText>
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

export default TopNavbar;
