import React from "react";
import { Redirect, Route, Switch } from "react-router";
import SignIn from "pages/Auth/SignIn";
import SignUp from "pages/Auth/SignUp";
import logo from "assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import classNames from "classnames/bind";
import styles from "pages/Listings/styles.module.scss";

const cn = classNames.bind(styles);

const Auth = () => {
  return (
    <>
      <div className={cn('auth_search')}>
        <div className={cn("listings_btn")}>
          <Link
            to="/search/offers"
            className={cn("listings_link", " listings_link_first")}
          >
            <Button color="primary" variant="contained" size="small">
              Search Offers
            </Button>
          </Link>
          <Link to="/search/needs" className={cn("listings_link")}>
            <Button color="primary" variant="contained" size="small">
              Search Needs
            </Button>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Auth;
