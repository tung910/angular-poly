import { createAction, props } from '@ngrx/store';

const login = createAction('[user/login] login', props<any>());
export { login };
