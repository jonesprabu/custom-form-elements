import { Component, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-feedback-input',
  templateUrl: './feedback-input.component.html',
  styleUrls: ['./feedback-input.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     multi:true,
  //     useExisting: FeedbackInputComponent
  //   }
  // ]
})
export class FeedbackInputComponent { //implements ControlValueAccessor {

  @Input()
  formControlName?: FormControl;

  feedback = '';


  // writeValue(feedback: string): void {
  //   this.feedback = feedback;
  // }
  // registerOnChange(fn: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // registerOnTouched(fn: any): void {
  //   throw new Error('Method not implemented.');
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
