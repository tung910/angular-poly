import { createAction, props } from '@ngrx/store';
import { job } from './job.type';

const addJob = createAction('[todo/add] add job', props<job>());
const removeJob = createAction('[todo/remove] remove job', props<job>());
export { addJob, removeJob };
