import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  questionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router:Router) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      description: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      subjectId:['',Validators.required]
    });
  }
   
  onSubmit(){
    if(this.questionForm.valid){
      this.authService.addQuestion(this.questionForm.value).subscribe(
        res=>{
          console.log(this.questionForm);
          this.router.navigate(['/admin']);
        },
        error=>{
          console.log(error);
          alert("an error occured");
        }
        
      )
    }
  }
}
