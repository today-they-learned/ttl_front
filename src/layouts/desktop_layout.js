import React from 'react';
import { useLocation } from 'react-router-dom';
import TopNavbar from 'components/Navbar/DesktopNavbar';
import SideBar from 'components/Sidebar/DesktopSidebar';
import COLOR from 'constants/color.constant';

const DesktopLayout = (props) => {
  const location = useLocation();
  return (
    <div
      style={{
        backgroundColor: `${COLOR.BACKGROUND}`,
        width: '100%',
      }}
    >
      <TopNavbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1170px',
          margin: 'auto',
          height: '100%',
        }}
      >
        {/* 메인 페이지에서만 사이드바 렌더링 */}
        {location.pathname === '/' ? <SideBar /> : null}
        <div style={{ width: '100%' }}>{props.children}</div>
      </div>
    </div>
  );
};

export default DesktopLayout;
