import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form.component';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackInputComponent } from './components/feedback-input/feedback-input.component';
import { ManageStudentsComponent } from './pages/manage-students/manage-students.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingInputComponent,
    FeedbackFormComponent,
    FeedbackInputComponent,
    ManageStudentsComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/star.svg'));
  }
}
