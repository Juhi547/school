import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';
import { ParentCreateComponent } from './home/parent-create/parent-create.component';
import { ParentListComponent } from './home/parent-list/parent-list.component';
import { StudentCreateComponent } from './home/student-create/student-create.component';
import { StudentListComponent } from './home/student-list/student-list.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'create-parent',component:ParentCreateComponent},
  {path:'parent-list',component:ParentListComponent},
  {path:'create-student',component:StudentCreateComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'viewdetail-student/:id',component:ViewdetailStudentComponent},
  {path:'viewdetail-parent/:id',component:ViewdetailParentComponent},
  {path:'create-notice',component:CreateNoticeComponent},
  {path:'notice-list',component:NoticeListComponent},
  {path:'create-homework',component:CreateHomeworkComponent},
  {path:'homework-list',component:HomeworkListComponent},
  {path:'academic-year',component:AcademicYearComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'teachers-list',component:TeachersListComponent},
  {path:'viewdetail-teachers/:id',component:ViewdetailTeachersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
