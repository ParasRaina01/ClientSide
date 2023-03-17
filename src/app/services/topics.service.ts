import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http:HttpClient) { }
  // topics="http://10.113.113.44:7000/{{topic}}";
  // console.log(topics);


}
