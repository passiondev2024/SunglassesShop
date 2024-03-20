import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  // Да го направя от type Observable
  register(firstName: string, lastName: string, email: string, password: string){
    return this.http
    .post('/api/users/register', {firstName, lastName, email, password})
  }
}
