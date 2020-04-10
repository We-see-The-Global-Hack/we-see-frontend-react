import * as firebase from 'firebase';
import { useEffect } from 'react';

const firebaseConfig = Object.freeze({
  apiKey: 'AIzaSyBgYYin4shr3zc4uvTeAbH6ji_nO5Ib2PI',
  // authDomain: AUTH_DOMAIN,
  // databaseURL: DATABASE_URL,
  storageBucket: 'we-see-global-hack.appspot.com',
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
