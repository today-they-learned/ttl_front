/* eslint-disable react/prop-types */
import React from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import MobileSideBar from 'components/mobile_sidebar/mobile_sidebar';
import Main from 'pages/main/main';
import Group from 'pages/group/group';
import Follow from 'pages/follow/follow';

const MobileLayout = ({ loactionPath }) => {
  const renderList = () => {
    switch (loactionPath) {
      case '/main':
        return <Main />;
      case '/group':
        return <Group />;
      case '/follow':
        return <Follow />;
      default:
        return <Main />;
    }
  };
  return (
    <div
      style={{
        backgroundColor: '#f8f8f8',
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
        <MobileSideBar />
        {renderList()}
      </div>
    </div>
  );
};

export default MobileLayout;
