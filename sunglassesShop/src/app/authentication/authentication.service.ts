import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../shared/types/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  key: string = 'auth'

  constructor(private http: HttpClient) {}

  getUser(): User | undefined {
    const localStorageUser = localStorage.getItem(this.key)
    if (localStorageUser) {
      return JSON.parse(localStorageUser)
    } else {
      return undefined
    }
  }

  get isAuthenticated(): boolean {
    return !!this.getUser()
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
      })
      )
  }

  logout() {
    return this.http
      //  { observe: 'response' }) -> С това казва върни целия http response
      .get('/api/users/logout', { observe: 'response' })
      .pipe(tap((response) => {
        if (response.status === 204 && !response.headers.has('Content-Type')) {
          localStorage.removeItem(this.key)
        } else {
          throw response
        }
      }))
  }
}

