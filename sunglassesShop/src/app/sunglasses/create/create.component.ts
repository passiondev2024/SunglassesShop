import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form = this.fb.group({
    brand: ['', [Validators.required]],
    model: ['', [Validators.required]],
    price: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    shape: ['', [Validators.required]],
    frameColor: ['', [Validators.required]],
    glassColor: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder){}

  createHandler(){
    if(this.form.invalid){
      console.log('Invalid form')
      return
    }

    console.log(this.form.value)
  }
}
