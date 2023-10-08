import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static getValidatorErrorMessage(validatorName: any, validatorValue?: any, propertyName?: any): any {
    const config: any = {
      required: 'Required',
      invalidName: 'Please enter valid name.',
      invalidNumber: 'Please enter valid number.',
      maxlength: 'Name can be max 12 characters long.',
      minlength: 'Name must be min 2 characters long.'
    }
    return config[validatorName];
  }

  static nameValidation(control: any): any {
    if (control?.value?.match(/^[A-Za-z ]+$/)) {
      return null;
    } else {
      return { invalidName: true };
    }
  }

  static numberValidation(control: any): any {
    if (control?.value?.match(/^-?(0|[1-9]\d*)?$/)) {
      return null;
    } else {
      return { invalidNumber: true };
    }
  }

}
