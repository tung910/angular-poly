import { createReducer, on } from '@ngrx/store';
import { login } from './login.action';

const initialState = {
  isLogin: false,
  user: {},
};
export const loginReducer = createReducer(
  initialState,
  on(login, (state, payload) => {
    return { isLogin: true, user: { ...payload } };
  })
);
