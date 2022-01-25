import React from 'react';
import TopNavbar from 'components/navbar/navbar';
import SideBar from 'components/sidebar/sidebar';
import PostList from 'components/post_list/post_list';

const DesktopLayout = props => {
  console.log(props);

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
        <SideBar />
      </div>
    </div>
  );
};
export default DesktopLayout;
