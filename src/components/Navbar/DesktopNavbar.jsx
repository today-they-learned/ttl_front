/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
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

const SearchContent = styled.div`
  position: absolute;
  height: 50px;
  width: 1px;
  margin-left: 170px;
  top: 2.4rem;
  right: 6.8rem;
  transform: translate(-50%, -50%);
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  border: 4px solid ${COLOR.PRIMARY};
  border-radius: 50%;
  background: none;
  color: ${COLOR.PRIMARY};
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);

  ${(props) =>
    props.searchShow &&
    css`
      box-sizing: border-box;
      padding: 0 40px 0 10px;
      width: 400px;
      height: 45px;
      border: none;
      border-bottom: 2px solid ${COLOR.PRIMARY};
      border-radius: 0;
      color: ${COLOR.PRIMARY};
      font-family: 'NS-R';
      font-size: 16px;
      font-weight: 400;
      outline: 0;
      -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
      transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
      -webkit-transition-delay: 0.4s, 0s, 0.4s;
      transition-delay: 0.4s, 0s, 0.4s;
      -webkit-transform: translate(-100%, -50%);
      -ms-transform: translate(-100%, -50%);
      transform: translate(-100%, -50%);
    `}
`;

const CloseSearch = styled.button`
  background: none;
  position: absolute;
  top: 0px;
  left: 0;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 4px;
    background-color: ${COLOR.PRIMARY};
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-top: 13px;
    margin-left: 17px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  ${(props) =>
    props.searchShow &&
    css`
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
      &::before {
        content: '';
        position: absolute;
        width: 27px;
        height: 4px;
        margin-top: -1px;
        margin-left: -13px;
        background-color: ${COLOR.PRIMARY};
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
      }
      &::after {
        content: '';
        position: absolute;
        width: 27px;
        height: 4px;
        background-color: ${COLOR.PRIMARY};
        margin-top: -1px;
        margin-left: -13px;
        cursor: pointer;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    `}
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
    inputRef.current.value = '';
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <SearchContent>
          <SearchInput type="text" searchShow={searchShow} ref={inputRef} onKeyPress={onKeyPress} />
          <CloseSearch type="reset" onClick={onChangeShow} searchShow={searchShow} />
        </SearchContent>

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
                    navigate(`/user/${user.user.id}`);
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
