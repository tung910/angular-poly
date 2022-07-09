import { createFeature, createReducer, on } from '@ngrx/store';
import { bookAdd } from './books.actions';
const initial = {
  isLoading: true,
  books: [],
};
export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initial,
    on(bookAdd, (state, books): any => {
      return { isLoading: false, books: [...state.books, books] };
    })
  ),
});
export const { name, reducer, selectBooksState, selectBooks, selectIsLoading } =
  booksFeature;
