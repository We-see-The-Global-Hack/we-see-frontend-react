import get from 'lodash.get'
import { createSelector } from 'reselect';

export const peek = (...path) => obj => get(obj, path);

const baseSelector = state => state.env;

export const envUserSelector = createSelector(
  baseSelector,
  peek('user')
);

export const envIsAuthorizedSelector = createSelector(
  baseSelector,
  peek('isAuthorized')
);

export const envTokensSelector = createSelector(
  baseSelector,
  peek('tokens')
);
