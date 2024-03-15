
import { ElementRef, Renderer2 } from "@angular/core";
import { ValidatorFn } from "@angular/forms";

export function matchPassword(renderer:Renderer2, el:ElementRef): ValidatorFn {

    return (control) => {
        const password = control?.value.password
        const rePassword = control?.value.rePassword

        if (password === rePassword) {
            return null
        } else {
            console.log(el.nativeElement)
            if (control.errors) {
                renderer.setStyle(el.nativeElement,
                  'border-color',
                  'red')
              } else {
                renderer.setStyle(el.nativeElement,
                  'border-color',
                  'green')
              }
           
            return { differentPasswords: true }
        }



        //     return password === rePassword
        //         ? null
        //         : { differentPasswords: true }
    }
}