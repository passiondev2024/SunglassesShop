import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NgControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFormStyles]'
})

export class FormStylesDirective {
 
  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private control: NgControl
  ){}

  @HostListener('focus') onFocus() {
    if(this.control.errors){
              this.render.setStyle(this.el.nativeElement,
                    'border-color',
                    'red')
            } else {
              this.render.setStyle(this.el.nativeElement,
                'border-color',
                'green')
            }
  }

   
}





// export class FormStylesDirective implements OnChanges {
//   @Input('appFormStyles') invalidValue: boolean | undefined

//   constructor(
//     private formControl: NgControl,
//     private el: ElementRef,
//     private render: Renderer2
//   ) { }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log(this.invalidValue)

//     if(this.formControl.touched){
//       if(this.formControl.errors){
//         this.render.setStyle(this.el.nativeElement,
//               'border-color',
//               'red')
//       } else {
//         this.render.setStyle(this.el.nativeElement,
//           'border-color',
//           'green')
//       }
//     }
//   }
// }
