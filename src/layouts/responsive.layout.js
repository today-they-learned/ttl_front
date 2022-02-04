/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import DesktopLayout from './desktop_layout';
import MobileLayout from './mobile_layout';

const ResponsiveLayout = () => {
  const loaction = useLocation();
  const loactionPath = loaction.pathname;

  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 763 });
    return isDesktop && <DesktopLayout loactionPath={loactionPath} />;
  };

  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 762 });
    return isMobile && <MobileLayout loactionPath={loactionPath} />;
  };

  return (
    <div>
      <Desktop />
      <Mobile />
    </div>
  );
};

export default ResponsiveLayout;
