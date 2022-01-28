import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/" component={ResponsiveLayout} />
      </BrowserRouter>
    </>
  );
};

export default App;
