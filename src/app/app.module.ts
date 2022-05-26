import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPublicComponent } from './components/layouts/layout-public/layout-public.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './components/Layouts/dashboard/dashboard.component';
import { SafeHtmlPipePipe } from './pipes/safe-html-pipe.pipe';
import { DashboardComponentPage } from './pages/admin/dashboard/dashboard.component';
import { ManagerCustomerComponent } from './pages/admin/manager-customer/manager-customer.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { QuizzesPageComponent } from './pages/quizzes-page/quizzes-page.component';
import { AddQuestionComponent } from './pages/admin/questions/add-question/add-question.component';
import { ManagerQuestionComponent } from './pages/admin/questions/manager-question/manager-question.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutPublicComponent,
    DashboardComponent,
    HomePageComponent,
    DashboardComponentPage,
    SafeHtmlPipePipe,
    ManagerCustomerComponent,
    QuestionPageComponent,
    QuizzesPageComponent,
    AddQuestionComponent,
    ManagerQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
      },
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
