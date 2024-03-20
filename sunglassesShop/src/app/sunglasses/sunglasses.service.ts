import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SunglassesService {
  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  getSunglasses(){
    return this.http.get(`${this.apiUrl}/data/sunglasses`)
  }
}
