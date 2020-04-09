import cookies from 'libs/cookie';
import Immutable from 'seamless-immutable';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILED, LOGOUT_ACTION } from './actions';

function getInitialState() {
  const auth = cookies.get('auth');
  const { tokens, user } = auth || { tokens: {}, user: {} };
  const isAuthorized = Boolean(auth);
  return Immutable({
    isAuthorized,
    tokens,
    user,
  });
}

const initialState = getInitialState();

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return state.merge(
        {
          ...state,
          error: false,
          loading: true,
        },
        { deep: true }
      );

    case SIGN_IN_SUCCESS:
      return state.merge(
        {
          isAuthorized: true,
          tokens: action.payload.tokens,
          user: action.payload.user,
          error: false,
          loading: false,
        },
        { deep: true }
      );

    case SIGN_IN_FAILED:
      return state.merge({
        user: initialState.user,
        isAuthorized: false,
        loading: false,
        error: true,
      });
  
    case LOGOUT_ACTION:
      return state.merge(
        {
          isAuthorized: false,
          tokens: {},
          user: {},
          error: false,
          loading: false,
        },
      );
      
    default:
      return state;
  }
};
