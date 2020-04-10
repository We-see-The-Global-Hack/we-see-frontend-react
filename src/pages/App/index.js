import React from 'react';
import { Route, Switch } from 'react-router';
import MainLayout from 'pages/MainLayout'
import Auth from 'pages/Auth'
import useAuth from 'hooks/useAuth';
import Listings from 'pages/Listings';
import Profile from 'pages/Profile';

function App() {
  const { isAuthorized } = useAuth();
  
  console.log('isAuthorized', isAuthorized);
  
  return (
    <Switch>
      {!isAuthorized && (<Route path={['/sign-in', '/sign-up']} component={Auth} />)}
      <Route path={"/listings"} component={Listings} />
      <Route path={"/profile"} component={Profile} />
      <Route path="/" component={MainLayout} />
    </Switch>
  );
}

export default App;


