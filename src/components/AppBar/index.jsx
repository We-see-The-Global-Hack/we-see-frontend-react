import React, { useCallback, useEffect } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import history from "libs/history";
import useAuth from "hooks/useAuth";
import { thunkLogOut } from "domain/env/effects";
import { useDispatch } from "redux-react-hook";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";

const cn = classNames.bind(styles);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ApplicationBar = () => {
  const [value, setValue] = React.useState(0);
  const { user } = useAuth();

  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(thunkLogOut());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    switch (history.location.pathname) {
      case "/search/user":
        return setValue(1);
      case "/search/offers":
        return setValue(1);
      case "/search/needs":
        return setValue(1);
      default:
        return setValue(0);
    }
  }, []);
  return (
    <>
      <AppBar position="static">
        <div className={cn("appBar")}>
          <Typography className={cn("appBar_title")} variant="h5">
            WeSee
          </Typography>
          <div className={cn("appBar_navbar")}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                label="My listings"
                {...a11yProps(0)}
                onClick={() => history.push("/listings")}
              />
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Tab
                      label="Search"
                      {...a11yProps(1)}
                      {...bindTrigger(popupState)}
                    />
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem
                          {...a11yProps(1)}
                        onClick={() => {
                          popupState.close();
                          handleChange(1, 1);
                          history.push("/search/user");
                        }}
                      >
                        Search User
                      </MenuItem>
                      <MenuItem
                          {...a11yProps(1)}
                        onClick={() => {
                          popupState.close();
                          handleChange(1, 1);
                          history.push("/search/offers");
                        }}
                      >
                        Search Offers
                      </MenuItem>
                      <MenuItem
                          {...a11yProps(1)}
                        onClick={() => {
                          popupState.close();
                          handleChange(1, 1);
                          history.push("/search/needs");
                        }}
                      >
                        Search Needs
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Tabs>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    {...bindTrigger(popupState)}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>

                  <Menu {...bindMenu(popupState)}>
                    <Typography className={cn("appBar_user")}>
                      Hi, {`${user.firstName} ${user.lastName}`}
                    </Typography>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        history.push("/profile");
                      }}
                    >
                      My profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        logout();
                      }}
                      className={cn("appBar_signOut")}
                    >
                      logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </div>
      </AppBar>
    </>
  );
};

export default ApplicationBar;

/*
<Button
          style={{ marginRight: 20 }}
          type="button"
          onClick={() => history.push("/listings")}
          variant="contained"
          color="primary"
        >
 */
