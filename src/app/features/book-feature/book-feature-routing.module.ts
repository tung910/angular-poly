import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFeatureComponent } from './book-feature.component';

const routes: Routes = [{ path: '', component: BookFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFeatureRoutingModule {}
