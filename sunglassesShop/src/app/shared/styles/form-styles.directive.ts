import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormStyles]'
})

export class FormStylesDirective implements OnDestroy {

  blurListenner: (() => void) | undefined

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private control: NgControl
  ) { }

  @HostListener('blur') onBlur() {
    if (this.control.errors) {
      this.renderer.setStyle(this.el.nativeElement,
        'border-color',
        'red')
    } else {
      this.renderer.setStyle(this.el.nativeElement,
        'border-color',
        'green')
    }
  }

  ngOnDestroy(): void {
    this.blurListenner?.()
  }
}