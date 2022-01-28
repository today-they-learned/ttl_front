import React from 'react';

import { useMediaQuery } from 'react-responsive';

import DesktopLayout from './desktop.layout';
import MobileLayout from './mobile.layout';

const ResponsiveLayout = () => {
  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop && <DesktopLayout />;
  };

  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 991 });
    return isMobile && <MobileLayout />;
  };

  return (
    <div>
      <Desktop />
      <Mobile />
    </div>
  );
};

export default ResponsiveLayout;
