import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  apiUrl: string = environment.apiUrl

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', this.apiUrl)
      })

      if (this.authenticationService.user) {
        const token = this.authenticationService.user.accessToken
        request = request.clone({
          setHeaders: {
            'X-Authorization': token
          }
        })
      }
    }

    return next.handle(request);
  }
}

export const AppInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}

