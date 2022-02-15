import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import 'styles/sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';
import { Navigation } from 'react-minimal-side-navigation';

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
  width: 11rem;
  height: 100%;
`;

const MobileSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authentication);

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

  const setArr = [];

  useEffect(() => {
    // 사이드바 보여줄 때 영역 밖 스크롤 금지
    if (sidebarToggled === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarToggled]);

  useEffect(() => {
    // 배열로 받은 태그목록을 배열 내 각각의 object로 변환한 뒤 아래 subNav에 전달
    if (user) {
      user.user.tags.forEach((tag) => {
        const curObj = {};
        curObj.title = tag;
        curObj.itemId = `/tags/${tag}`;
        setArr.push(curObj);
      });
    }
  });

  const setType = (itemId) => {
    dispatch({ type: `${itemId.item}`, title: `${itemId.title}` });
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
              <Navigation
                onSelect={({ itemId }) => {
                  if (user) {
                    setType(itemId);
                  }
                  if (!user && itemId.item !== 'main') {
                    navigate('/signin');
                  }
                  setSidebarToggled(!sidebarToggled);
                }}
                items={[
                  {
                    title: '피드',
                    itemId: { item: 'main', title: '피드' },
                    elemBefore: () => <Icon name="th large" style={{ fontSize: '1.2rem' }} />,
                  },

                  {
                    title: '팔로우',
                    itemId: { item: 'follow', title: '팔로우' },
                    elemBefore: () => <Icon name="user plus" style={{ fontSize: '1.2rem' }} />,
                  },
                  {
                    title: '관심태그',
                    itemId: '/tag',
                    elemBefore: () => <Icon name="tags" style={{ fontSize: '1.2rem' }} />,

                    subNav: user ? setArr : null,
                  },
                  {
                    title: '북마크',
                    itemId: '/bookmark',
                    elemBefore: () => <Icon name="bookmark" style={{ fontSize: '1.2rem' }} />,
                  },
                  {
                    title: '읽은 목록',
                    itemId: '/read_list',
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
