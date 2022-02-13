import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

import wrapper from 'store/configureStore';
import ResponsiveLayout from 'layouts/responsive.layout';
import { Mypage, SignIn, SignUp, Article } from 'pages';
import PostList from 'components/post_list/post_list';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </>
  );
};

export default wrapper.withRedux(App);
