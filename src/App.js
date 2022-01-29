import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, Mypage, MypageEdit } from 'pages';

import GlobalStyles from 'styles/GlobalStyles';
import profileImg from 'imgs/profile.jpg';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

const App = () => {
  const initialInfo = {
    tistory_user_id: 'soye0710',
    github_user_id: 'soyekwon',
    velog_user_id: 'SoyE',
    username: 'SoyE',
    email: 'soye0710@naver.com',
    password: 'qwertyuiop',
    introduce: '안녕하세요 :) 국민대학교 재학중인 개발자 준비생 권소예입니다.',
    avatar: profileImg,
    tags: ['#algorithm', '#python', '#react'],
    repository: 'https://github.com/soyekwon/TIL',
    mailable: true,
  };
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/mypage" render={() => <Mypage data={initialInfo} />} />
        <Route
          path="/mypage_edit"
          render={() => <MypageEdit data={initialInfo} />}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
