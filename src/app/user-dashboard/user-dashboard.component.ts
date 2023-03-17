import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
    constructor(public authService: AuthServiceService,private router:Router) {}
    onLogOut() {
        sessionStorage.removeItem('Auth_token');
        sessionStorage.removeItem('userRole');
        this.router.navigate(['/login']);
      }
}
