
import { MatSelectModule } from '@angular/material/select'
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { QuizeDataService } from '../services/quize-data.service';


@Component({
  selector: 'app-choose-subject',
  templateUrl: './choose-subject.component.html',
  styleUrls: ['./choose-subject.component.css']
})

export class ChooseSubjectComponent implements OnInit {

  topics: any;
  selectedSubject: string = null;

  constructor(private router: Router, private http: HttpClient, private userData: QuizeDataService) { }

  ngOnInit() {

    //Getting the Topics Name from which user can Selet one
    this.userData.topics().subscribe((data) => {
      //console.log(data);
      this.topics = data;
    });
  }

  goToQuiz() {
    this.router.navigate(['/quiz',{"key":this.selectedSubject}]);
    //console.log(this.selectedSubject);
  }
}

