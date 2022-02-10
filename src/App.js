import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mypage, SignIn, SignUp, Setting } from 'pages';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

import wrapper from 'store/configureStore';
import ResponsiveLayout from 'layouts/responsive.layout';
import PostList from 'components/post_list/post_list';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ResponsiveLayout>
          <Routes>
            <Route exact path="/" element={<PostList />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/mypage" element={<Mypage />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </>
  );
};

export default wrapper.withRedux(App);
