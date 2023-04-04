import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form.component';
import { ManageStudentsComponent } from './pages/manage-students/manage-students.component';

const routes: Routes = [
  { path: 'feedback', component: FeedbackFormComponent },
  { path: 'manage', component: ManageStudentsComponent },
  { path: '', redirectTo: 'feedback', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
