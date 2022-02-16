import React from 'react';
import MobileSideBar from 'components/Sidebar/MobileSidebar';
import MobileNavbar from 'components/Navbar/MobileNavbar';
import COLOR from 'constants/color.constant';

const MobileLayout = (props) => {
  return (
    <div
      style={{
        backgroundColor: `${COLOR.BACKGROUND}`,
        width: '100%',
      }}
    >
      <MobileNavbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1170px',
          margin: 'auto',
          height: '100%',
        }}
      >
        <MobileSideBar />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default MobileLayout;
