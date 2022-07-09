import { createAction, props } from '@ngrx/store';

export const bookAdd = createAction('[book/add] books', props<any>());
