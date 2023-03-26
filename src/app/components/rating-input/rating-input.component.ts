import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RatingInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: RatingInputComponent
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor, Validator {

  @Input() noOfStars = 5;
  rating = 0;
  isTouched = false;
  isDisabled = false;

  onChange = (rating = this.rating) => { };
  onTouched = () => { };
  onValidationChange = () => {};

  setRating(rating: number) {
    this.markAsTouched();
    if (rating === this.rating) {
      this.rating = rating - 1;
    } else {
      this.rating = rating;
    }
    this.onChange(this.rating);
  }

  // Sets the value used by the ngModel of the element used in Template Driven Form.
  set value(val: number) {
    this.rating = val;
    this.onChange(val);
    this.onTouched();
  }

  markAsTouched() {
    if (!this.isTouched) {
      this.onTouched();
      this.isTouched = true;
    }
  }

  //ValueAccessor Implementation
  writeValue(rating: any): void {
    this.rating = rating;
  }
  registerOnChange(onChangeFn: any): void {
    this.onChange = onChangeFn;
  }
  registerOnTouched(onTouchedFn: any): void {
    this.onTouched = onTouchedFn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  //Validator Implementation
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const rating = control.value;
    if (rating <= 0) {
      return {
        mustBePositive: {
          rating
        }
      } as ValidationErrors;
    } else
      return null;
  }
  registerOnValidatorChange?(onValidationChangeFn: () => void): void {
    this.onValidationChange = onValidationChangeFn;
  }

}
