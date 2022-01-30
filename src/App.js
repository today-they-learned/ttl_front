import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from 'pages';
import Signin from 'component/Sign/SignIn';

import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </>
  );
};

export default App;
