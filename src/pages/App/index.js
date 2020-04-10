import React from "react";
import { Route, Switch } from "react-router";
import MainLayout from "pages/MainLayout";
import Auth from "pages/Auth";
import useAuth from "hooks/useAuth";
import Listings from "pages/Listings";
import Search from "pages/Search";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {green,teal } from '@material-ui/core/colors';


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

  console.log("isAuthorized", isAuthorized);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {!isAuthorized && (
          <Route path={["/sign-in", "/sign-up"]} component={Auth} />
        )}
        <Route path={"/listings"} component={Listings} />
        <Route path={"/search"} component={Search} />
        <Route path="/" component={MainLayout} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
