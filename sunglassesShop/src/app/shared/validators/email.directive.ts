import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }

  ]
})
export class EmailDirective implements Validator {

  validator: ValidatorFn = emailValidator()

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control)
  }
}
