import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import 'styles/sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';
import { Navigation } from 'react-minimal-side-navigation';
import { SET_TYPE } from 'reducers/postListType';

const SidebarShowUp = keyframes`
   0% {
      transform: translate(-30%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
`;

const SidebarShowDown = keyframes`
   0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
`;

const Bar = styled.div`
  position: fixed;
  top: 1.2rem;
  left: -1rem;
  width: 1px;
  height: 100%;
  z-index: 1;
  background-color: grey;
`;

const Toggle = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-left: 2rem;
`;

const SidebarOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const SidebarWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => props.visible === null && 'none'};
  ${(props) =>
    props.sidebarToggled !== null &&
    css`
      animation: 0.7s ${props.sidebarToggled ? SidebarShowUp : SidebarShowDown} forwards;
    `}

  position: fixed;
  top: -1rem;
  right: 0;
  bottom: 0;
  left: -1rem;
  z-index: 1000;
  outline: 0;
`;

const SidebarInner = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 7rem;
  height: 100%;
`;

const SidebarList = styled.div`
  ${(props) =>
    props.sidebarToggled !== null &&
    css`
      animation: 0.5s ${props.sidebarToggled ? SidebarShowUp : SidebarShowDown} forwards;
    `}

  background-color: white;
  transition: all 0.3s;
  width: 18rem;
  height: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0 1.2rem 0;
`;

const SearchInput = styled.input`
  background-color: #dfe6f1;
  width: 14rem;
  height: 2rem;
  border-radius: 3rem;
  text-align: left;
  padding-left: 4.5rem;
`;

const MobileSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authentication);

  const inputRef = useRef();

  const [sidebarToggled, setSidebarToggled] = useState(null);
  const [maskClosable] = useState(true);

  const onClose = () => {
    setSidebarToggled(false);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
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
    inputRef.current.value = '';
    setSidebarToggled(!sidebarToggled);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const setArr = [];

  useEffect(() => {
    // ???????????? ????????? ??? ?????? ??? ????????? ??????
    if (sidebarToggled === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarToggled]);

  useEffect(() => {
    // ????????? ?????? ??????????????? ?????? ??? ????????? object??? ????????? ??? ?????? subNav??? ??????
    if (user) {
      user.user.tags.forEach((tag) => {
        const curObj = {};
        curObj.title = tag;
        curObj.itemId = `/tags/${tag}`;
        setArr.push(curObj);
      });
    }
  }, []);

  const setType = (itemId) => {
    if (typeof itemId === 'object') {
      dispatch({
        type: SET_TYPE,
        item: `${itemId.item}`,
        title: `${itemId.title}`,
        isTag: false,
      });
    }

    if (typeof itemId === 'string') {
      dispatch({
        type: SET_TYPE,
        item: `${itemId.slice(6)}`,
        title: `${itemId.slice(6)}`,
        isTag: true,
      });
    }
  };

  return (
    <>
      <Bar>
        <Toggle>
          <Icon
            name="align justify"
            style={{ fontSize: '1.35rem' }}
            onClick={() => {
              setSidebarToggled(!sidebarToggled);
            }}
          />
        </Toggle>
        <SidebarOverlay visible={sidebarToggled} />
        <SidebarWrapper
          sidebarToggled={sidebarToggled}
          onClick={maskClosable ? onMaskClick : null}
          tabIndex="-1"
          visible={sidebarToggled}
        >
          <SidebarInner>
            <SidebarList
              sidebarToggled={sidebarToggled}
              style={{ margin: '1rem', padding: '0.5rem 0' }}
            >
              <SearchContainer>
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
                  placeholder="???????????? ???????????????"
                  ref={inputRef}
                  onKeyPress={onKeyPress}
                />
              </SearchContainer>
              <Navigation
                onSelect={({ itemId }) => {
                  if (user && itemId !== '/tags') {
                    setType(itemId);
                  }
                  if (!user && itemId.item !== 'main') {
                    navigate('/signin');
                  }
                  setSidebarToggled(!sidebarToggled);
                }}
                items={[
                  {
                    title: '??????',
                    itemId: { item: 'main', title: '??????' },
                    elemBefore: () => <Icon name="th large" style={{ fontSize: '1.2rem' }} />,
                  },

                  // {
                  //   title: '?????????',
                  //   itemId: { item: 'follow', title: '?????????' },
                  //   elemBefore: () => <Icon name="user plus" style={{ fontSize: '1.2rem' }} />,
                  // },
                  {
                    title: '????????????',
                    itemId: '/tags',
                    elemBefore: () => <Icon name="tags" style={{ fontSize: '1.2rem' }} />,

                    subNav: user ? setArr : null,
                  },
                  {
                    title: '?????????',
                    itemId: { item: 'bookmark', title: '?????????' },
                    elemBefore: () => <Icon name="bookmark" style={{ fontSize: '1.2rem' }} />,
                  },
                  {
                    title: '?????? ??????',
                    itemId: { item: 'study', title: '?????? ??????' },
                    elemBefore: () => <Icon name="eye" style={{ fontSize: '1.2rem' }} />,
                  },
                ]}
              />
            </SidebarList>
          </SidebarInner>
        </SidebarWrapper>
      </Bar>
    </>
  );
};

export default MobileSideBar;
