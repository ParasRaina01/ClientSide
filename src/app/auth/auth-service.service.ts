import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

interface AuthResponseData {
  token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  user = new Subject();
  userEmail: string;
  goto:boolean=false;
  token:any;
  constructor(private http: HttpClient,private router:Router) {}
  onSignUp(obj: any): Observable<any> {
    return this.http.post('http://10.113.113.44:8089/createusers', obj);
  }
  onAdminSignUp(obj:any): Observable<any>{
    this.token = sessionStorage.getItem('Auth_token');
    // this.token=this.token.substring(1,this.token.length-1);
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token}`
      // 'access-token': `Bearer ${this.token}`
      })
    return this.http.post('http://10.113.113.44:8089/admin/create',obj,{headers:header});
  }

  onLogin(obj: any): Observable<any> {
    this.userEmail = obj.userEmail;
    // console.log(obj);
    return this.http.post('http://10.113.113.44:8089/authenticate', obj);
  }

  getEmail(){
    return this.userEmail;
  }
  onLogOut() {
    // sessionStorage.removeItem('Auth_token');
    // sessionStorage.removeItem('role');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  getUsersList(){
    this.token = sessionStorage.getItem('Auth_token');
    this.token=this.token.substring(1,this.token.length-1);
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token}`
      // 'access-token': `Bearer ${this.token}`
      })
      return this.http.get('http://10.113.113.44:6060/users',{headers:header});
    // return this.http.get('http://10.113.113.44:8087/admin/allusers',{headers:header});
  }

  addQuestion(obj:any):Observable<any>{
    this.token = sessionStorage.getItem('Auth_token');
    this.token=this.token.substring(1,this.token.length-1);
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token}`
      // 'access-token': `Bearer ${this.token}`
      })
    return this.http.post('http://10.113.113.44:7070/questions',obj,{headers:header});
  }
}
