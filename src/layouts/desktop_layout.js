import React from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import SideBar from 'components/sidebar/sidebar';
import COLOR from 'constants/color.constant';
import { useLocation } from 'react-router-dom';

const DesktopLayout = (props) => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith('/post') ? (
        <div>{props.children}</div>
      ) : (
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
            <SideBar />
            <div>{props.children || null}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopLayout;
