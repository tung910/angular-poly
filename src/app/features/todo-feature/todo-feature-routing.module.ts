import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFeatureComponent } from './todo-feature.component';

const routes: Routes = [{ path: '', component: TodoFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoFeatureRoutingModule { }
