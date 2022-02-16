import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

import wrapper from 'store/configureStore';
import ResponsiveLayout from 'layouts/responsive.layout';
import { Mypage, SignIn, SignUp, Article } from 'pages';
import PostList from 'components/PostList/PostList';
import PostEditorForm from 'components/EditorForm/PostEditorForm';
import PutEditorForm from 'components/EditorForm/PutEditorForm';

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
            <Route path="/post" element={<PostEditorForm />} />
            <Route path="/put/:id" element={<PutEditorForm />} />
          </Routes>
        </ResponsiveLayout>
      </BrowserRouter>
    </>
  );
};

export default wrapper.withRedux(App);
