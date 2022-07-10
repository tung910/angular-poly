import { createSelector } from '@ngrx/store';
import { todoReducer } from './todo.reducer';

const jobSelectors = createSelector(todoReducer.selectJobs, (state) => state);

export { jobSelectors };
