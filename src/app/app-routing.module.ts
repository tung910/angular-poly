import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'book-feature',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./features/book-feature/book-feature.module').then(
        (m) => m.BookFeatureModule
      ),
  },
  { path: 'todo-feature', loadChildren: () => import('./features/todo-feature/todo-feature.module').then(m => m.TodoFeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
