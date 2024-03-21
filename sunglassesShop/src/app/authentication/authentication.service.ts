import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../shared/types/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  key: string = 'auth'

  user: User | undefined

  constructor(private http: HttpClient) {
    const localStorageUser = localStorage.getItem(this.key)
    if (localStorageUser) {
      this.user = JSON.parse(localStorageUser)
    } else {
      this.user = undefined
    }
  }

  get isAuthenticated(): boolean {
    return !!this.user
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/api/users/register', { firstName, lastName, email, password })
      .pipe(tap(currentUser => {
        localStorage.setItem(this.key, JSON.stringify(currentUser))
      })
      )
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap(currentUser => {
        localStorage.setItem(this.key, JSON.stringify(currentUser))
      }),

      )
  }
}

