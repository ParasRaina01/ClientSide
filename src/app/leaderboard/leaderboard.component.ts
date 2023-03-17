// import { Component } from '@angular/core';
import {Component,OnInit, ViewChild} from '@angular/core';
import { ServiceService } from '../services/service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { Employee } from '../models/Employee';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  // displayedColumns: string[] = ['id', 'userId', 'title'];
  displayedColumns: string[] = ['rank','scoreId', 'score'];
  // myData = ELEMENT_DATA;
  selected = '';
  title:string="Welcome to Leader Board✌✌"
  allData:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private user:ServiceService){
  }
  value:string='Anurag';
  chooseCourse(event){
    this.value=event.value;
    console.log(event.value);
    this.getAllData();
  }
  getAllData(){
    //  this.value=this.changeSubject(event);
    return this.user.getData(this.value).subscribe(result=>{
        this.allData=result;
        console.log(this.allData);
        this.dataSource=new MatTableDataSource<Employee>(this.allData.topicScores);
        this.dataSource.paginator=this.paginator;
      })
}
alltopics:any;
Topics(){
  return this.user.gettopics().subscribe(data=>{
    this.alltopics=data;
    console.log(this.alltopics);
  })
}
anyButton(){
  this.title='';
}

  ngOnInit():void{
    // this.changeSubject(event);
    // this.getAllData();
  }
}

