import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ApiService } from './home/service/api.service';
import { ParentListComponent } from './home/parent-list/parent-list.component';
import { ParentCreateComponent } from './home/parent-create/parent-create.component';
import { ParentEditComponent } from './home/parent-edit/parent-edit.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { StudentCreateComponent } from './home/student-create/student-create.component';
import { StudentListComponent } from './home/student-list/student-list.component';
import { StudentService } from './home/service/student.service';
import { ViewdetailStudentComponent } from './home/viewdetail-student/viewdetail-student.component';
import { ViewdetailParentComponent } from './home/viewdetail-parent/viewdetail-parent.component';
import { CreateNoticeComponent } from './home/create-notice/create-notice.component';
import { NoticeListComponent } from './home/notice-list/notice-list.component';
import { CreateHomeworkComponent } from './home/create-homework/create-homework.component';
import { HomeworkListComponent } from './home/homework-list/homework-list.component';
import { AcademicYearComponent } from './home/academic-year/academic-year.component';
import { TeachersComponent } from './home/teachers/teachers.component';
import { ViewdetailTeachersComponent } from './home/viewdetail-teachers/viewdetail-teachers.component';
import { TeachersListComponent } from './home/teachers-list/teachers-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ParentListComponent,
    ParentCreateComponent,
    ParentEditComponent,
    NavbarComponent,
    SidebarComponent,
    StudentCreateComponent,
    StudentListComponent,
    ViewdetailStudentComponent,
    ViewdetailParentComponent,
    CreateNoticeComponent,
    NoticeListComponent,
    CreateHomeworkComponent,
    HomeworkListComponent,
    AcademicYearComponent,
    TeachersComponent,
    ViewdetailTeachersComponent,
    TeachersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiService,StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
