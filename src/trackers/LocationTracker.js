import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const LocationTracker = () => {
  const location = useLocation();

  // Fired on every route change
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location]);

  return <></>;
};

export default LocationTracker;
