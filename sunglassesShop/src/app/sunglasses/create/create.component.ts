import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { imageUrlValidator } from 'src/app/shared/validators/image-url-validator';
import { SunglassesService } from '../sunglasses.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(
    private fb: FormBuilder,
    private sunglassesService: SunglassesService,
    private router:Router
  ) { }

  createHandler() {
    if (this.form.invalid) {
      console.log('Invalid form')
      return
    }

    const {
      brand,
      model,
      price,
      imageUrl,
      gender,
      shape,
      frameColor,
      glassColor
    } = this.form.value

    if (
      typeof brand === 'string' &&
      typeof model === 'string' &&
      typeof price === 'number' &&
      typeof imageUrl === 'string' &&
      typeof gender === 'string' &&
      typeof shape === 'string' &&
      typeof frameColor === 'string' &&
      typeof glassColor === 'string'
     ){
      this.sunglassesService.createSunglasses(
        brand,
        model,
        price,
        imageUrl,
        gender,
        shape,
        frameColor,
        glassColor
      ).subscribe({
        next: newSunglasses=>{
          this.router.navigate(['/catalog'])
        }, 
        error: (responseError:HttpErrorResponse)=>{
          alert(responseError.error.message)
          this.form.setValue({
            brand: '',
            model: '',
            price: '',
            imageUrl: '',
            gender: '',
            shape: '',
            frameColor: '',
            glassColor: '',
          })
        }
      })
    } else {
      alert('Some form fields are invalid or missing')
      this.form.setValue({
        brand: '',
        model: '',
        price: '',
        imageUrl: '',
        gender: '',
        shape: '',
        frameColor: '',
        glassColor: '',
      })
    }
  }
}
