import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {ValidationService} from '../../Services/validation.service';


@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {

  @Input()
  control!: AbstractControl;

  constructor() {
  }

  shouldShowErrors(): any {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  get errorMessage(): any {
    for (const propertyName in this.control?.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control?.touched && this.control?.value) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
