import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFeatureRoutingModule } from './book-feature-routing.module';
import { BookFeatureComponent } from './book-feature.component';
import { StoreModule } from '@ngrx/store';
import { booksFeature } from './books.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookFeatureComponent],
  imports: [
    CommonModule,
    BookFeatureRoutingModule,
    StoreModule.forFeature(booksFeature),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookFeatureModule {}
