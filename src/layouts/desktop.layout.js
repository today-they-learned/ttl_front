/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import SideBar from 'components/sidebar/sidebar';
import PostList from 'components/post_list/post_list';
// import PostList from 'components/post_list/post_list';

// eslint-disable-next-line react/prop-types
const DesktopLayout = () => {
  const [feedType, setFeedType] = useState();
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
        <PostList feedType={feedType} />
      </div>
    </div>
  );
};

export default DesktopLayout;
