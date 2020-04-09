import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import SignIn from 'pages/Auth/SignIn';
import SignUp from 'pages/Auth/SignUp';

const Auth = () => {
  return (
    <Switch>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Redirect to="/"/>
    </Switch>
  );
};

export default Auth;
