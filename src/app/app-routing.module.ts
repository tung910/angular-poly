import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Layouts/dashboard/dashboard.component';
import { LayoutPublicComponent } from './components/layouts/layout-public/layout-public.component';
import { DashboardComponentPage } from './pages/admin/dashboard/dashboard.component';
import { ManagerCustomerComponent } from './pages/admin/manager-customer/manager-customer.component';
import { ManagerQuestionComponent } from './pages/admin/manager-question/manager-question.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { QuizzesPageComponent } from './pages/quizzes-page/quizzes-page.component';
import { AuthGuard } from './utils/auth.guard';
import { RoleGuard } from './utils/role.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPublicComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'questions',
        children: [
          { path: '', component: QuestionPageComponent },
          { path: ':slug', component: QuizzesPageComponent },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    children: [
      {
        path: '',
        component: DashboardComponentPage,
      },
      {
        path: 'questions',
        component: ManagerQuestionComponent,
      },
      {
        path: 'customers',
        component: ManagerCustomerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
