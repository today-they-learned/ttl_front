import React from 'react';
import { useLocation } from 'react-router-dom';
import TopNavbar from 'components/top_navbar/top_navbar';
import SideBar from 'components/sidebar/sidebar';
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
        {location.pathname.startsWith('/sign') ? null : <SideBar />}
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default DesktopLayout;
