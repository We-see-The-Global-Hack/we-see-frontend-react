import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import MainLayout from "pages/MainLayout";
import Auth from "pages/Auth";
import useAuth from "hooks/useAuth";
import Listings from "pages/Listings";
import Search from "pages/Search";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, teal } from "@material-ui/core/colors";
import useFetchData from "hooks/useFetchData";
import api from "libs/apis";
import history from "libs/history";
import Profile from "pages/Profile";
import Offer from "pages/Offers";
import Needs from "pages/Needs";
import CreateNeeds from "pages/CreateNeeds";
import CreateOffers from "pages/CreateOffers";
import GlobalOffer from "pages/Global/Offers";
import GlobalNeeds from "pages/Global/Needs";
import ApplicationBar from "components/AppBar";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

function App() {
  const { isAuthorized } = useAuth();

  const { fetchResource } = useFetchData({
    api: api.auth.checkUser,
    initialParams: {},
    initialLoad: false,
    initialValues: {}
  });

  const checkUser = async () => {
    if (isAuthorized) {
      try {
        const data = await fetchResource();
        if (!data.user.isActive) {
          history.push("/profile");
        }
      } catch (e) {
        console.log("e", e);
      }
    }
  };

  useEffect(() => {
    checkUser();
  }, [isAuthorized]);

  return (
    <ThemeProvider theme={theme}>
      <>
        {isAuthorized ? (
          <>
            <ApplicationBar />
            <Switch>
              <Route path={"/profile"} component={Profile} />
              <Route path={"/listings/offers"} component={Offer} />
              <Route path={"/listings/create/needs"} component={CreateNeeds} />
              <Route
                path={"/listings/create/offers"}
                component={CreateOffers}
              />
              <Route path={"/listings/needs"} component={Needs} />
              <Route path={"/search/offers"} component={GlobalOffer} />
              <Route path={"/search/needs"} component={GlobalNeeds} />
              <Route path={"/search/user"} component={Search} />
              <Route path={"/listings"} component={Listings} />
              <Route path="/" component={Listings} />
            </Switch>
          </>
        ) : (
          <Switch>
            <Route path={["/sign-in", "/sign-up"]} component={Auth} />
            <Redirect to={"/sign-in"} />
          </Switch>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
