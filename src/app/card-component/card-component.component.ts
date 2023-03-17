import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { QuizeDataService } from '../services/quize-data.service';
@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  // longText: string[] = [];
  // options: string[][] = [];

  logoutActive: boolean = true;
  counter: number = 0;
  buttonName: string = 'Next Question';
  quizForm: FormGroup;
  selectedSubject: string;
  Totalscore: string;
  hi: any;
  user: any;
  alloption: string[] = [];
  Question: string;
  questionId: number;
  choosenAnswer: string;

  constructor(
    formbuilder: FormBuilder,
    private userData: QuizeDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedSubject = this.route.snapshot.paramMap.get('key');
    console.log(this.selectedSubject);

    this.quizForm = new FormGroup({
      option: new FormControl(''),
    });

    //get the fisrt Question on loadiing the Quiz page
    this.userData.questions(this.selectedSubject).subscribe((data) => {
      this.user = data;
      // console.log(this.user);
      this.alloption = [];
      this.questionId = this.user.questionId;
      this.alloption.push(this.user.option1);
      this.alloption.push(this.user.option2);
      this.alloption.push(this.user.option3);
      this.alloption.push(this.user.option4);
      // this.options.push(this.alloption);
      this.Question = this.user.description;
    });
  }

  onSubmit() {
    //Will Run this section on submission of the Last Question
    if (this.counter === 9) {
      //  sending the choosen answer of the current question
      this.userData.checkAnswer(this.questionId, this.choosenAnswer).subscribe((data) => {
        console.log(data);
      })
      //Calling Api at the last Qesion
      this.userData.lastQuestion(this.selectedSubject).subscribe((data) => {
        this.hi = data;
        this.Totalscore = this.hi.message;
        // console.log(this.Totalscore);
        this.router.navigate(['/greet', { "key": this.Totalscore }]);
      })
      return;
    }
    //Changing the button content at the last Question
    if (this.counter === 8) {
      this.buttonName = 'Submit';
    }

    //Increase the Question No on each iteration
    this.counter += 1;

    //find the choosen optionId
    this.choosenAnswer = this.quizForm.value.option;
    // console.log(this.choosenAnswer);
    console.log(this.questionId, this.choosenAnswer);

    //  sending the choosen answer of the current question
    this.userData
      .checkAnswer(this.questionId, this.choosenAnswer)
      .subscribe((data) => {
        console.log(data);
      });

    //Get next Question when user clicks on Next Question
    this.userData.questions(this.selectedSubject).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.alloption = [];
      this.questionId = this.user.questionId;
      this.alloption.push(this.user.option1);
      this.alloption.push(this.user.option2);
      this.alloption.push(this.user.option3);
      this.alloption.push(this.user.option4);
      // this.options.push(this.alloption);
      this.Question = this.user.description;
    });
    this.quizForm.reset();
  }
}
