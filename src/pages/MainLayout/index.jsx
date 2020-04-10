import React, { useCallback } from 'react';
import history from 'libs/history';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'redux-react-hook';
import { thunkLogOut } from 'domain/env/effects';

const MainLayout = () => {
  const { isAuthorized } = useAuth();
  
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(thunkLogOut());
  }, []);
  
  return (
    <div>
      Landing here...
      <div>
        {
          isAuthorized
            ? <button onClick={logout}>Logout</button>
            : <button onClick={() => history.push('/sign-in')}>SignIn</button>
        }
      </div>
    </div>
  );
};

export default MainLayout;
