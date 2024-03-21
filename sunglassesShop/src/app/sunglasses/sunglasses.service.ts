import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SunglassesService {
  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  getSunglasses() {
    return this.http.get('/api/data/sunglasses')
  }

  createSunglasses(brand: string, model: string, price: number, imageUrl: string, gender: string, shape: string, frameColor: string, glassColor: string) {
    return this.http
      .post('/api/data/sunglasses', {
        brand,
        model,
        price,
        imageUrl,
        gender,
        shape,
        frameColor,
        glassColor
      })
  }
}
