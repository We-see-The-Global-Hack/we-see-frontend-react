import cookies from 'libs/cookie';
import history from 'libs/history';
import api from 'libs/apis';
import { signInSuccess, signInRequest, signInError, logoutAction } from 'domain/env/actions';
import { envIsAuthorizedSelector } from 'domain/env/selectors';

const COOKIES_LIFETIME = 1000 * 60 * 60 * 24 * 365 * 10; // 10 years

const TOKEN_KEYS = ['access-token', 'token-type', 'client', 'uid', 'expiry'];
const getHeaderValue = headers => key => headers[key];
export const getTokens = (keys, getValue) => keys.reduce((acc, key) => ({ ...acc, [key]: getValue(key) }), {});

export const thunkSignIn = data => async dispatch => {
  try {
    dispatch(signInRequest());
    const URLParams = new URLSearchParams(window.location.search);
    const redirectTo = URLParams.get('redirect_to');
    const response = await api.auth.signIn({ params: data });
    console.log('SIGN IN response', response);
    // const tokens = getTokens(TOKEN_KEYS, getHeaderValue(response.headers));
    // const user = response.data.resource;
    // TODO: REPLACE THIS MOCK
    const auth = { user: { name: 'Dmitry'}, tokens: { uid: '228322'} };
    // const auth = { user, tokens };
    
    cookies.set('auth', JSON.stringify(auth), {
      domain: process.env.REACT_APP_FRONTEND_DOMAIN,
      expires: new Date(Date.now() + COOKIES_LIFETIME),
      path: '/',
    });
  
    dispatch(signInSuccess(auth));
    
    if (redirectTo) {
      const regexp = new RegExp('https?://');
      if (regexp.test(redirectTo)) {
        window.location.replace(redirectTo);
      } else {
        history.push(redirectTo);
      }
    } else {
      history.push('/');
    }
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
