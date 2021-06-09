import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }