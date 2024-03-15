import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  })

  constructor(private fb: FormBuilder) { }
  login() {
    if(this.form.invalid){
      console.log('Invalid form')
      return
    }

    console.log(this.form.value)
  }

}
