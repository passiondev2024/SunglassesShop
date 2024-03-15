import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchPassword } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.maxLength(15)]],
    email: ['', [Validators.required, emailValidator()]],
    passwordsGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rePassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    },
      {
        validators: [matchPassword(this.renderer, this.el)]
      })
  })

  // el не е референция на инпута а на цялата форма
  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private el: ElementRef
    
    ) { }

  register() {
    if (this.form.invalid) {
      console.log('Invalid form')
      return
    }

    console.log(this.form.value)
  }
}
