import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'semantic-ui-css/semantic.min.css';
import 'styles/fonts.css';

import { Home, SignIn, SignUp } from 'pages';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </BrowserRouter>
    </>
  );
};

export default App;
