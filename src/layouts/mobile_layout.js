/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import MobileSideBar from 'components/mobile_sidebar/mobile_sidebar';
import PostList from 'components/post_list/post_list';
import MobileNavbar from 'components/mobile_navbar/mobile_navbar';

const MobileLayout = () => {
  const [feedType, setFeedType] = useState({ item: 'main', title: '피드' });
  const selectFeedType = (type) => {
    setFeedType(type);
  };
  return (
    <div
      style={{
        backgroundColor: '#f8f8f8',
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
        <MobileSideBar selectFeedType={selectFeedType} />
        <PostList feedType={feedType} />
      </div>
    </div>
  );
};

export default MobileLayout;
