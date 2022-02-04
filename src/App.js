import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Mypage } from 'pages';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<ResponsiveLayout />} />
            <Route exact path="/mypage" component={Mypage} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
