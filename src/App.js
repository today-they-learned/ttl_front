import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';

import { SignIn, SignUp } from 'pages';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<ResponsiveLayout />} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
