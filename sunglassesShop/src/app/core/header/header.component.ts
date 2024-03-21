import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  get isLogged():boolean{
    console.log(this.authenticationService.isAuthenticated)
    return this.authenticationService.isAuthenticated
  }

  logout() {
    this.authenticationService.logout().subscribe({
      next: example => {
        this.router.navigate(['/catalog'])
      },
      error: (responseError:HttpErrorResponse)=>{
        alert(responseError.error.message)
      }
    })
  }
}
