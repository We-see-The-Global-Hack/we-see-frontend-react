import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import history from "libs/history";

const ApplicationBar = () => {
  return (
    <AppBar position="relative" style={{ background: 'transparent' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'center'}}>
        <Button
          style={{ marginRight: 20 }}
          type="button"
          onClick={() => history.push('/listings')}
          variant="contained"
          color="primary"
        >
          My listings
        </Button>
        <Button
          style={{ marginRight: 20 }}
          type="button"
          onClick={() => history.push('/profile')}
          variant="contained"
          color="primary"
        >
          My profile
        </Button>
        <Button
          style={{ marginRight: 20 }}
          type="button"
          onClick={() => history.push('/search')}
          variant="contained"
          color="primary"
        >
          Search users
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
