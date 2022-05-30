import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import en from '@angular/common/locales/en';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

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
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { SearchComponent } from './components/search/search.component';

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
    SignUpComponent,
    SignInComponent,
    BannerComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzTableModule,
    NzPopconfirmModule,
    NzModalModule,
    NzCollapseModule,
    NzListModule,
    NzFormModule,
    NzDropDownModule,
    NzCarouselModule,
    NzMessageModule,
    NzMentionModule,
    NzEmptyModule,
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
