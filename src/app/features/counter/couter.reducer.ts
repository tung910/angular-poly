import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './couter.action';

export const initialState = 0;
const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  })
);
export { counterReducer };
