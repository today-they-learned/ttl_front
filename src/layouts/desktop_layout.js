import React, { useState } from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import SideBar from 'components/sidebar/sidebar';
import COLOR from 'constants/color.constant';

const DesktopLayout = (props) => {
  const [feedType, setFeedType] = useState({ item: 'main', title: '피드' });
  const selectFeedType = (type) => {
    setFeedType(type);
  };

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
        <SideBar selectFeedType={selectFeedType} />
        <div feedType={feedType}>{props.children || null}</div>
      </div>
    </div>
  );
};

export default DesktopLayout;
