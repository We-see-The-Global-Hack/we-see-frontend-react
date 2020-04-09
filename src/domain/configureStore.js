import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'seamless-immutable';
import { rootReducer } from './reducers';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export default function configureStore() {
  const initialState = Immutable({});
  return createStore(rootReducer, initialState, bindMiddleware([thunk]));
}
