import cookies from 'libs/cookie';
import history from 'libs/history';
import api from 'libs/apis';
import { signInSuccess, signInRequest, signInError, logoutAction } from 'domain/env/actions';
import { envIsAuthorizedSelector } from 'domain/env/selectors';

const COOKIES_LIFETIME = 1000 * 60 * 60 * 24 * 365 * 10; // 10 years

export const thunkSignIn = data => async dispatch => {
  try {
    dispatch(signInRequest());
    const response = await api.auth.signIn({ params: data });
    const auth = { user: response.data.user, token: response.data.token };
    
    cookies.set('auth', JSON.stringify(auth), {
      domain: process.env.REACT_APP_FRONTEND_DOMAIN,
      expires: new Date(Date.now() + COOKIES_LIFETIME),
      path: '/',
    });
  
    dispatch(signInSuccess(auth));
    
    history.push('/');
  } catch (e) {
    dispatch(signInError());
    console.log('error', e);
  }
};

export const thunkLogOut = () => async (
  dispatch,
  getState
) => {
  const state = getState();
  const isAuthorized = envIsAuthorizedSelector(state);
  if (isAuthorized) {
    dispatch(logoutAction());
    await cookies.remove('auth', {
      path: '/',
    });
    history.push('/');
  }
};
