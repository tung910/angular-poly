import { createFeature, createReducer, on } from '@ngrx/store';
import { job } from './job.type';
import { addJob, removeJob } from './todo.actions';
const initialState = {
  jobs: [],
};
export const todoReducer = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(addJob, (state, payload): any => {
      const jobs = [...state.jobs, payload].reverse();
      return { jobs };
    }),
    on(removeJob, (state, payload): any => {
      const newJobs = state?.jobs.filter((item: job) => {
        return item.id !== payload.id && item;
      });
      return { jobs: newJobs };
    })
  ),
});
export const { name, reducer, selectJobs, selectTodoState } = todoReducer;
