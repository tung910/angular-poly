import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bookAdd } from './books.actions';
import { booksSelector } from './books.selectors';

@Component({
  selector: 'app-book-feature',
  templateUrl: './book-feature.component.html',
  styleUrls: ['./book-feature.component.scss'],
})
export class BookFeatureComponent implements OnInit {
  books$: Observable<any[]> | undefined;
  constructor(private _store: Store) {}

  ngOnInit(): void {
    this.books$ = this._store.pipe(select(booksSelector));
  }
  handlerSubmit($event: any) {
    this._store.dispatch(bookAdd($event.value));
  }
}
