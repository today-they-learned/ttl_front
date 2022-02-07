/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React from 'react';

import { useMediaQuery } from 'react-responsive';

import DesktopLayout from './desktop_layout';
import MobileLayout from './mobile_layout';

const ResponsiveLayout = ({ children }) => {
  console.log(children);
  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 763 });
    return isDesktop && <DesktopLayout>{children}</DesktopLayout>;
  };

  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 762 });
    return isMobile && <MobileLayout>{children}</MobileLayout>;
  };

  return (
    <div>
      <Desktop />
      <Mobile />
    </div>
  );
};

export default ResponsiveLayout;
