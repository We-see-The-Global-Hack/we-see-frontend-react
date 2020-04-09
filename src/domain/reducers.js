import { combineReducers } from 'redux';

import * as env from './env';

export const rootReducer = combineReducers({
  env: env.reducer,
});
