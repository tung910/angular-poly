import { createAction } from '@ngrx/store';

const increment = createAction('[Counter component] Increment');
const decrement = createAction('[Counter component] Decrement');
// const increment = createAction('[Counter component] Increment');

export { increment, decrement };
