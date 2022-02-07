import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mypage, SignIn, SignUp } from 'pages';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';
import ResponsiveLayout from 'layouts/responsive.layout';
import PostList from 'components/post_list/post_list';
import TestEditorForm from 'components/PostEditorForm/PostEditorForm';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route exact path="/post" element={<TestEditorForm />} />
        </Routes>
        <ResponsiveLayout>
          <Routes>
            <Route exact path="/" element={<PostList />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/mypage" element={<Mypage />} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
