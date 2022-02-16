import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

import wrapper from 'store/configureStore';
import ResponsiveLayout from 'layouts/responsive.layout';
import { Mypage, SignIn, SignUp, Article, Setting } from 'pages';
import PostList from 'components/post_list/post_list';
import TestEditorForm from 'components/PostEditorForm/PostEditorForm';
import ReactGA from 'react-ga';
import LocationTracker from 'trackers/location_tracker';

ReactGA.initialize('UA-220387661-1');

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/post" element={<TestEditorForm />} />
          </Routes>
        </ResponsiveLayout>
        <LocationTracker />
      </Router>
    </>
  );
};

export default wrapper.withRedux(App);
