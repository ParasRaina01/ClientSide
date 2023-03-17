import { Component,OnInit } from '@angular/core';
import { FormGroup,  FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule, Router} from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registrationForm !: FormGroup;
  isRegistered = false;
  registrationError = null;
  user: any;
  constructor(private authService: AuthServiceService,
    private router: Router){
  }
  ngOnInit(){
    this.registrationForm = new FormGroup({
      'userName': new FormControl(null,Validators.required),
      'userEmail': new FormControl(null,[Validators.required,Validators.email]),
      'userPhoneNo': new FormControl(null,[Validators.required,Validators.minLength(10),
      Validators.maxLength(10)]),
      'userPassword': new FormControl(null,[Validators.required,Validators.minLength(6)]),
      // 'confirmPassword': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'dob': new FormControl('',Validators.required),
      'question': new FormControl('',Validators.required),
      'answer': new FormControl('', Validators.required)
    })
  }
  questions: any = ['first pet name', 'favourite teacher name', 'favourite icecream flavour'];
  onSubmit(){
    this.isRegistered = true;
    if(this.registrationForm.valid){
      this.authService.onSignUp(this.registrationForm.value).subscribe(result =>{
          console.log(result);
          this.router.navigate(['/login']);
      },
      error =>{
        this.registrationError = error.error.message;
        console.log(error.error.message);
      })
    }
    console.log(this.registrationForm);
  }
}
