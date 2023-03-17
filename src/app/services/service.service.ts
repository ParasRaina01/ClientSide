import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../models/Employee'
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  topics="http://10.113.113.44:6060/topics";
  subj1="http://10.113.113.44:6060/topics/";
  subj2="/scores";
  finalUrl:any;
  token:any;

  // token1:any;
  httpOptions:any;
  getData(sub:string):Observable<Employee>{
  this.token = sessionStorage.getItem('Auth_token');
  this.token=this.token.substring(1,this.token.length-1)
  console.log(this.token);
     let header = new HttpHeaders({
        'Content-Type':'application/json',
        'access-token': `${this.token}`
        })

    this.finalUrl=this.subj1+sub+this.subj2;
    return this.http.get<Employee>(this.finalUrl, {headers:header});
  }
  gettopics(){
    // this.token1 = sessionStorage.getItem('Auth_token');
    // console.log(this.token1);
    this.token = sessionStorage.getItem('Auth_token');
    this.token=this.token.substring(1,this.token.length-1)
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token}`
      })
    return this.http.get<Employee>(this.topics, {headers:header});
  }
}
