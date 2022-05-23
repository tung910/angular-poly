import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPublicComponent } from './components/layouts/layout-public/layout-public.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './components/Layouts/dashboard/dashboard.component';
import { SafeHtmlPipePipe } from './pipes/safe-html-pipe.pipe';
import { DashboardComponentPage } from './pages/admin/dashboard/dashboard.component';
import { ManagerQuestionComponent } from './pages/admin/manager-question/manager-question.component';
import { ManagerCustomerComponent } from './pages/admin/manager-customer/manager-customer.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutPublicComponent,
        HomePageComponent,
        DashboardComponent,
        DashboardComponentPage,
        SafeHtmlPipePipe,
        ManagerQuestionComponent,
        ManagerCustomerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
