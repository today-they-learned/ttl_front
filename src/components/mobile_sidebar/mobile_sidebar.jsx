import React, { useState } from 'react';
import styled from 'styled-components';
import 'styles/sidebar.css';
import { Icon } from 'semantic-ui-react';
import { Navigation } from 'react-minimal-side-navigation';

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
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 55px;
  right: 0;
  bottom: 0;
  left: -1rem;
  z-index: 1000;
  /* overflow: auto; */
  outline: 0;
`;
const SidebarInner = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 7rem;
  height: 100%;
  background-color: black;
`;

const SidebarList = styled.div`
  display: ${(props) => (props.sidebarToggled ? 'block' : 'none')};
  background-color: white;
  transition: all 100ms ease-in-out;
  width: 15rem;
  height: 100%;
`;

const CloseIcon = styled.div`
  font-size: 1.2rem;
  text-align: right;
  margin: 0.5rem;
`;

const MobileSideBar = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [maskClosable] = useState(true);

  const onClose = () => {
    setSidebarToggled(false);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <Bar>
        <Toggle>
          <Icon
            name="align justify"
            style={{ fontSize: '1.5rem' }}
            onClick={() => {
              setSidebarToggled(!sidebarToggled);
            }}
          />
        </Toggle>
        <SidebarOverlay visible={sidebarToggled} />
        <SidebarWrapper
          onClick={maskClosable ? onMaskClick : null}
          tabIndex="-1"
          visible={sidebarToggled}
        >
          <SidebarInner>
            <SidebarList
              sidebarToggled={sidebarToggled}
              style={{ margin: '1rem', padding: '0.5rem 0' }}
            >
              <CloseIcon>
                <Icon name="close" onClick={close} />
              </CloseIcon>

              <Navigation
                onSelect={({ itemId }) => {
                  console.log(itemId);
                  setSidebarToggled(!sidebarToggled);
                }}
                items={[
                  {
                    title: '피드',
                    itemId: { item: 'main', title: '피드' },
                    elemBefore: () => <Icon name="th large" style={{ fontSize: '1.2rem' }} />,
                  },
                  {
                    title: '그룹',
                    itemId: { item: 'group', title: '그룹' },
                    elemBefore: () => <Icon name="users" style={{ fontSize: '1.2rem' }} />,
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

                    subNav: [
                      {
                        title: 'aws',
                        itemId: '/follow/aws',
                      },
                      {
                        title: 'spring',
                        itemId: '/follow/spring',
                      },
                      {
                        title: 'django',
                        itemId: '/follow/django',
                      },
                    ],
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
