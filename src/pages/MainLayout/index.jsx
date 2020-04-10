import React, { useCallback } from 'react';
import history from 'libs/history';
import useAuth from 'hooks/useAuth';
import useFirebase from 'hooks/useFirebase';
import { useDispatch } from 'redux-react-hook';
import { thunkLogOut } from 'domain/env/effects';

const MainLayout = () => {
  const { isAuthorized, user } = useAuth();
  
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(thunkLogOut());
  }, []);
  
  const firebase = useFirebase();
  
  const handleFileUploadChange = useCallback(async (e) => {
    const selectedFile = e.target.files[0];
    if (firebase) {
      const storage = firebase.storage();
      const storageRef = storage.ref(`${user.id}/${new Date().toISOString().slice(0, -5)}_${selectedFile.name}`);
  
      const downloadedFile = await storageRef.put(selectedFile);
      const path = await downloadedFile.ref.getDownloadURL();
      console.log('path', path);
    }
  }, [user]);
  
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
      
      <input onChange={handleFileUploadChange} type="file" />
    </div>
  );
};

export default MainLayout;
