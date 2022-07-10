import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoFeatureRoutingModule } from './todo-feature-routing.module';
import { TodoFeatureComponent } from './todo-feature.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';

@NgModule({
  declarations: [TodoFeatureComponent],
  imports: [
    CommonModule,
    TodoFeatureRoutingModule,
    FormsModule,
    StoreModule.forFeature(todoReducer),
  ],
})
export class TodoFeatureModule {}
