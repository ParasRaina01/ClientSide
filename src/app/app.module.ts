import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//
import { FlexLayoutModule } from '@angular/flex-layout';
import {  ReactiveFormsModule,FormGroup,FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {NgxPaginationModule} from 'ngx-pagination'
import {MatPaginatorModule} from '@angular/material/paginator';
import { ServiceService } from './services/service.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { ChooseSubjectComponent } from './choose-subject/choose-subject.component';
import { GreetingComponent } from './greeting/greeting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { UsersListComponent } from './users-list/users-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { UploadQuestionComponent } from './upload-question/upload-question.component';



const appRoutes : Routes = [
  {path:'',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'resetPassword', component: ResetPasswordComponent},
  {path:'login', component:LoginComponent},
  {path:'leaderBoard', component: LeaderboardComponent,canActivate: [AuthGuard]},
  {path:'quiz',component:CardComponentComponent,canActivate: [AuthGuard]},
  {path: 'choosesubject', component: ChooseSubjectComponent,canActivate: [AuthGuard]},
  {path:'greet', component: GreetingComponent,canActivate: [AuthGuard]},
  {path:'admin',component: AdminCompComponent},
  {path:'usersList',component:UsersListComponent},
  {path:'registerAdmin',component:AddAdminComponent},
  {path:'addQuestion',component:AddQuestionComponent},
  {path:'uploadQuestion', component:UploadQuestionComponent},
  {path:'**',component:ErrorCompComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    LeaderboardComponent,
    CardComponentComponent,
    ChooseSubjectComponent,
    UserDashboardComponent,
    GreetingComponent,
     NavbarComponent,
     AddAdminComponent,
     AdminCompComponent,
     SidebarComponent,
     UsersListComponent,
     DashboardComponent,
     AddQuestionComponent,ErrorCompComponent,
     UploadQuestionComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,FlexLayoutModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports:[RouterModule,AngularMaterialModule
  ],
  providers: [HttpClient,ServiceService],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
