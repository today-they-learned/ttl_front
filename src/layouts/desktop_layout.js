import React, { useState } from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import SideBar from 'components/sidebar/sidebar';
import PostList from 'components/post_list/post_list';
import COLOR from 'constants/color.constant';

const DesktopLayout = () => {
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
        <PostList feedType={feedType} />
      </div>
    </div>
  );
};

export default DesktopLayout;
