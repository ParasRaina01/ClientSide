import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import {Router} from '@angular/router';
import { pipe,map,Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { throwError,catchError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  flag=false;
  constructor(private authService:AuthServiceService,
    private router: Router,
    private http:HttpClient){

  }
  auth_cookie = null;
  badCredentials = false;
  getLoggedInUser(auth_token): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get('', { headers: headers })
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      userPassword: new FormControl('', [Validators.required,Validators.minLength(6)]
      )
    });
  }
  onSubmit(){
    console.log(this.loginForm);
    if(this.loginForm.valid){
      this.authService.onLogin(this.loginForm.value).subscribe((result) =>{
        if(result){

          sessionStorage.setItem('Auth_token',result.token);
          sessionStorage.setItem('role',(result.role));
          if(sessionStorage.getItem('role')=="ADMIN"){
              this.router.navigate(['/admin']);
              return;
          }
          this.auth_cookie = sessionStorage.getItem('Auth_token');
          this.router.navigate(['/choosesubject']);
        }
        else{
          this.router.navigate(['/login']);
        }
      },
      error=>{
        console.error();
        this.badCredentials = true;
      })
  }
}
}
