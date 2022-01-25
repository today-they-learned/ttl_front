import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';
import DesktopLayout from 'layouts/desktop.layout';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/" component={DesktopLayout} />
      </BrowserRouter>
    </>
  );
};

export default App;
