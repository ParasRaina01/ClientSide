import { Component,OnInit,ViewChild} from '@angular/core';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthServiceService } from '../auth/auth-service.service';
import { AuthGuard } from '../auth/auth.guard';
import { userList } from '../models/userlist.model';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  userList: any;
  dataSource: any;
  displayedColumns: string[] = ['rank','userId','userName'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private authService: AuthServiceService,
  private authGuard: AuthGuard){}

  ngOnInit(){
    this.authService.getUsersList().subscribe(
      result =>{
        this.userList = result;
        this.dataSource=new MatTableDataSource<userList>(this.userList);
        console.log(this.dataSource);
        this.dataSource.paginator=this.paginator;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
