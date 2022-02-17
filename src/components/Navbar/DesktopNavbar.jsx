import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Icon, Dropdown } from 'semantic-ui-react';
import COLOR from 'constants/color.constant';
import { darken } from 'polished';
import { SET_TYPE } from 'reducers/postListType';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.85rem 2rem;
  margin-bottom: 4rem;
  z-index: 1;
  box-shadow: 1px 1px 10px -5px black;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  border-radius: 50%;
`;

const DropText = styled.div`
  font-weight: 500 !important;
`;

const Login = styled.button`
  background: ${COLOR.PRIMARY} !important;
  color: white !important;
  font-family: 'NS-R' !important;
  height: 2rem;
  font-size: 14px !important;
  letter-spacing: 0.1rem;
  border-radius: 0.3rem;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background: ${darken(0.03, COLOR.PRIMARY)} !important;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 7rem;
  height: auto;
`;

const SearchInput = styled.input`
  background-color: #dfe6f1;
  width: 30rem;
  height: 3rem;
  border-radius: 3rem;
  text-align: left;
  padding-left: 4.5rem;
`;

const TopNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authentication);

  const inputRef = useRef();

  const [searchShow, setSearchShow] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    window.location.replace('/');
  };

  const onSearch = () => {
    navigate('/');
    dispatch({
      type: SET_TYPE,
      item: inputRef.current.value,
      title: inputRef.current.value,
      isTag: false,
      isSearch: true,
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const onChangeShow = () => {
    setSearchShow(!searchShow);
  };

  const trigger = (
    <span>
      <Avatar
        src={user?.user.avatar ? user.user.avatar : `${process.env.PUBLIC_URL}/images/missing.png`}
        style={{ cursor: 'pointer' }}
      />
    </span>
  );

  return (
    <Nav>
      <Logo
        onClick={() => window.location.replace('/')}
        src={`${process.env.PUBLIC_URL}/images/Logo.gif`}
        alt="logo"
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon
          name="search"
          style={{
            fontSize: '1.5rem',
            marginRight: '0.5rem',
            cursor: 'pointer',
            position: 'relative',
            left: '4rem',
          }}
          onClick={onSearch}
        />
        <SearchInput
          placeholder="키워드를 검색하세요"
          ref={inputRef}
          onKeyPress={onKeyPress}
          searchShow={searchShow}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon
          name="search"
          style={{ fontSize: '1.5rem', marginRight: '0.5rem', cursor: 'pointer' }}
          onClick={onChangeShow}
        />
        {user ? (
          <>
            <Icon
              name="pencil alternate"
              style={{ fontSize: '1.5rem', marginLeft: '0.5rem', cursor: 'pointer' }}
              onClick={() => {
                navigate('/post');
              }}
            />
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
                    navigate('/post');
                  }}
                >
                  <DropText>글쓰기</DropText>
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
            </Dropdown>{' '}
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

export default TopNavbar;
