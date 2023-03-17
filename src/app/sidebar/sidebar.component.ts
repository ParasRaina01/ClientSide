import { Component,OnDestroy } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';
import { AuthServiceService } from '../auth/auth-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy{

    constructor(private authService: AuthServiceService){}

    onLgOut(){
      this.authService.onLogOut();
    }
    ngOnDestroy(): void {
      
    }
}
