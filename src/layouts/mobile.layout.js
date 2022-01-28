import React from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import PostList from 'components/post_list/post_list';
import MobileSideBar from 'components/mobile_sidebar/mobile_sidebar';

const MobileLayout = () => {
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
        <PostList />
      </div>
    </div>
  );
};

export default MobileLayout;
