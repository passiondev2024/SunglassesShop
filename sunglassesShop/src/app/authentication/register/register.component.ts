import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchPassword } from 'src/app/shared/validators/match-passwords-validator';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
        validators: [matchPassword()]
      })
  })

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  register() {
    if (this.form.invalid) {
      console.log('Invalid form')
      return
    }

    const {
      firstName,
      lastName,
      email,
      passwordsGroup: { password, rePassword } = {}
    } = this.form.value

    if (
      typeof firstName === 'string' &&
      typeof lastName === 'string' &&
      typeof email === 'string' &&
      typeof password === 'string'
    ) {
      this.authenticationService.register(firstName, lastName, email, password).subscribe({
          next: user => {
            this.router.navigate(['/catalog'])
          },
          error: (responseError: HttpErrorResponse) => {
            alert(responseError.error.message)

            this.form.setValue({
              firstName: '',
              lastName: '',
              email: '',
              passwordsGroup:
              {
                password: '',
                rePassword: ''
              }
            })
          }
        })
    } else {
      alert('Invalid register data. Please try again.');
    }
  }
}
