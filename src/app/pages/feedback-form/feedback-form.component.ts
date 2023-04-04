import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {

  feedbackForm = this.fb.group({
    feedback: new FormControl('', [Validators.required]),
    rating: new FormControl(4, [Validators.required])
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(JSON.stringify(this.feedbackForm.value));
    alert(JSON.stringify(this.feedbackForm.getRawValue()));
  }

}
