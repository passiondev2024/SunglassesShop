import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appFormStyles]'
})
export class FormStylesDirective implements OnChanges {
  @Input('appFormStyles') inputValue: string | null = ''
  
  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.inputValue)
  }
}


