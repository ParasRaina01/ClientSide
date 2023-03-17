import { Component } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { AuthGuard } from '../auth/auth.guard';
@Component({
  selector: 'app-admin-comp',
  templateUrl: './admin-comp.component.html',
  styleUrls: ['./admin-comp.component.css']
})
export class AdminCompComponent {
  constructor(private authService: AuthServiceService){

  }
  opened = true;
  buttonWork(){
    this.authService.onLogOut();
  }
}
