import { Component, Input } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() logoutActive: boolean;
  constructor(public authService: AuthServiceService,private router:Router,private dialog:MatDialog) {}
  logOut() {
    this.authService.onLogOut();
  }
  // this.userEmail = this.authService.getEmail().subscribe();
  
  userDashBoard() {
    const dialogRef = this.dialog.open(UserDashboardComponent,{
        width:'30%'
    });

  }
}
