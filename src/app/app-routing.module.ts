import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Layouts/dashboard/dashboard.component';
import { LayoutPublicComponent } from './components/layouts/layout-public/layout-public.component';
import { DashboardComponentPage } from './pages/admin/dashboard/dashboard.component';
import { ManagerCustomerComponent } from './pages/admin/manager-customer/manager-customer.component';
import { ManagerQuestionComponent } from './pages/admin/manager-question/manager-question.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    {
        path: '', component: LayoutPublicComponent, children: [
            { path: '', component: HomePageComponent }
        ],

    },
    {
        path: 'admin', component: DashboardComponent, children: [
            {
                path: '', component: DashboardComponentPage
            },
            {
                path: 'questions', component: ManagerQuestionComponent
            },
            {
                path: 'customers', component: ManagerCustomerComponent
            },

        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
