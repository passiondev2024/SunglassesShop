import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunglassesService {
  appUrl: string = ''

  constructor(private http: HttpClient) {}

  getSunglasses(){
    return this.http.get(`${this.appUrl}/data/sunglasses`)
  }
}
