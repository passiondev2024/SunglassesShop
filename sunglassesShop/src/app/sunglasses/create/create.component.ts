import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { imageUrlValidator } from 'src/app/shared/validators/image-url-validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form = this.fb.group({
    brand: ['', [Validators.required, Validators.maxLength(10)]],
    model: ['', [Validators.required, Validators.maxLength(10)]],
    price: ['', [Validators.required, Validators.min(1)]],
    imageUrl: ['', [Validators.required, imageUrlValidator()]],
    gender: ['', [Validators.required]],
    shape: ['', [Validators.required, Validators.maxLength(10)]],
    frameColor: ['', [Validators.required, Validators.maxLength(10)]],
    glassColor: ['', [Validators.required, Validators.maxLength(10)]],
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
