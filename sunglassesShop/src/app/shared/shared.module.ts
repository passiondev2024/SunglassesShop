import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStylesDirective } from './styles/form-styles.directive';
import { EmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    FormStylesDirective,
    EmailDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormStylesDirective,
    EmailDirective
  ]
})
export class SharedModule { }
