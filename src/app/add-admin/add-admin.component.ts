import { Component,OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { AngularMaterialModule } from '../angular-material.module';
import { FormGroup,  FormControl,Validators,ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit{
  addAdminForm: FormGroup;
  isRegistered = false;
  registrationError = null;
  user: any;
  constructor(private authService: AuthServiceService,
    private router: Router){
  }
  ngOnInit(){
    this.addAdminForm = new FormGroup({
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
    if(this.addAdminForm.valid){
      this.authService.onAdminSignUp(this.addAdminForm.value).subscribe(result =>{
          console.log(result);
          this.router.navigate(['/']);
      },
      error =>{
        // this.registrationError = error.error.message;
        console.log(error);
      })
    }
    console.log(this.addAdminForm);
  }
}
