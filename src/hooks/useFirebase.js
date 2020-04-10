import * as firebase from 'firebase';
import { useEffect } from 'react';

const firebaseConfig = Object.freeze({
  apiKey: process.env.REACT_APP_API_KEY,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
});

export default function useFirebase() {
  useEffect(() => {
    if (!firebase.apps.length) {
      console.log('Firebase initialized');
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebase]);
  
  return firebase;
}
