import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from "ng-recaptcha";
import { ReactiveFormsModule} from '@angular/forms' 
import { CompanyRoutingModule } from './company-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessloginComponent } from './successlogin/successlogin.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DatacardsComponent } from './datacards/datacards.component'; 
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, SuccessloginComponent, PasswordresetComponent, DashboardComponent, DatacardsComponent],
  imports: [ 
    CommonModule, 
    RecaptchaModule,
    CompanyRoutingModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule

  ]
})
export class CompanyModule { }
