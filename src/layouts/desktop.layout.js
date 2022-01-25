import React from 'react';
import TopNavbar from 'components/topNavbar/topNavbar';

const DesktopLayout = props => {
  console.log(props);

  return (
    <div style={{ backgroundColor: '#f8f8f8', width: '100%', height: '100vh' }}>
      <TopNavbar />
    </div>
  );
};
export default DesktopLayout;
