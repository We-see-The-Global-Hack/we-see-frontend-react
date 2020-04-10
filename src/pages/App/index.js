import React, { useEffect, useMemo } from "react";
import { Route, Switch } from "react-router";
import MainLayout from "pages/MainLayout";
import Auth from "pages/Auth";
import useAuth from "hooks/useAuth";
import Listings from "pages/Listings";
import Search from "pages/Search";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, teal } from '@material-ui/core/colors';
import useFetchData from 'hooks/useFetchData';
import api from 'libs/apis';
import history from 'libs/history';
import Profile from 'pages/Profile';
import Offer from "pages/Offers";
import Needs from "pages/Needs";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  const { isAuthorized } = useAuth();
  
  const { fetchResource } = useFetchData({
    api: api.auth.checkUser,
    initialParams: {},
    initialLoad: false,
    initialValues: {},
  });
  
  const checkUser = async () => {
    if (isAuthorized) {
      try {
        const data = await fetchResource();
        if (!data.user.isActive) {
          history.push('/profile');
        }
      } catch (e) {
        console.log('e', e);
      }
    }
  };
  
  useEffect( () => {
    checkUser();
  }, [isAuthorized]);
  
  const AuthorizedRoutes = () => (
    <>
      <Route path={"/profile"} component={Profile} />
      <Route path={"/listings/offers"} component={Offer} />
      <Route path={"/listings/needs"} component={Needs} />
      <Route path={"/listings"} component={Listings} />
      <Route path={'/search'} component={Search} />
    </>
  );
  
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {isAuthorized ? (
          <>
            <Route path={['/profile', '/listings', '/search']} component={AuthorizedRoutes} />
          </>
        ) : (
          <Route path={["/sign-in", "/sign-up"]} component={Auth} />
        )}
        <Route path="/" component={MainLayout} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
