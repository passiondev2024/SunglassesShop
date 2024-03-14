import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStylesDirective } from './styles/form-styles.directive';



@NgModule({
  declarations: [
    FormStylesDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormStylesDirective
  ]
})
export class SharedModule { }
