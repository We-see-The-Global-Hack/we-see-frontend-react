import { envIsAuthorizedSelector, envUserSelector } from 'domain/env/selectors';
import { useMappedState } from 'redux-react-hook';
import { createStructuredSelector } from 'reselect';

const selector = createStructuredSelector({
  isAuthorized: envIsAuthorizedSelector,
  user: envUserSelector,
});

export default function useAuth() {
  return useMappedState(selector);
}
