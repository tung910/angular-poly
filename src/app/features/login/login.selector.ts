import { createFeatureSelector, createSelector } from '@ngrx/store';

export const loginFeatureSelector = createFeatureSelector<any>('login');
export const loginSelector = createSelector(loginFeatureSelector, (state) => {
  const {
    user: { password, ...user },
    ...args
  } = state;
  return { ...args, ...user };
});
