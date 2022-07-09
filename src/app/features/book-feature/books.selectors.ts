import { createSelector } from '@ngrx/store';
import { booksFeature } from './books.reducer';

export const booksSelector = createSelector(
  booksFeature.selectBooks,
  booksFeature.selectIsLoading,
  (state) => {
    return state;
  }
);
