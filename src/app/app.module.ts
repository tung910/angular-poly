import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import en from '@angular/common/locales/en';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
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
import { SlugifyPipe } from './pipes/slugify.pipe';
import { ListQuestionComponent } from './pages/admin/questions/list-question/list-question.component';
import { EditQuestionComponent } from './pages/admin/questions/edit-question/edit-question.component';

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
    SlugifyPipe,
    ListQuestionComponent,
    EditQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule,
    NzModalModule,
    NzCollapseModule,
    NzListModule,
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
