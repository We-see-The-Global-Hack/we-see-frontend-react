import React, { useEffect } from "react";
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
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ApplicationBar = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    switch (history.location.pathname) {
      case "/search/user":
        return setValue(2);
      case "/search/offers":
        return setValue(2);
      case "/search/needs":
        return setValue(2);
      case "/profile":
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
            <Tab
              label="My profile"
              {...a11yProps(1)}
              onClick={() => history.push("/profile")}
            />
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Tab
                    label="Search"
                    {...a11yProps(2)}
                    {...bindTrigger(popupState)}
                  />
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        history.push("/search/user");
                      }}
                    >
                      Search User
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        history.push("/search/offers");
                      }}
                    >
                      Search Offers
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
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
