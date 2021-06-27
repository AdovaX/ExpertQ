import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../Services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../class/Company';
import {MatDialog} from '@angular/material/dialog';
import { SuccessloginComponent } from '../successlogin/successlogin.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false; 
  constructor(private CompanyService:CompanyService,private formBuilder: FormBuilder,public dialog: MatDialog) { }

  Company: Company[];
  disabled = true;

  ngOnInit(): void {
  //this.company_list();
  this.registerForm = this.formBuilder.group({
    C_full_name :['', Validators.required],
    Company_email :['', Validators.required],
    Company_password :['', Validators.required],

  });
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`); 
  this.disabled = false;
  }
  onSubmit() {
    this.submitted = true;    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert("All fields are mandatory");
        return;
    }else{

      this.disabled = true; 
       var companyData = new Company();
      companyData.C_full_name = this.registerForm.value.C_full_name;
      companyData.Company_email = this.registerForm.value.Company_email;
      companyData.Company_password = this.registerForm.value.Company_password;
       
       this.CompanyService.insertCompany(companyData).subscribe( data => {
         this.Company = data;
         console.log("-------");
         console.log(this.Company);
         this.openDialog();
            
       });
     
      
    }

  }
  
  openDialog() {
   let  dialogRef = this.dialog.open(SuccessloginComponent);
     dialogRef.afterClosed().subscribe( data => {
      });
  }
  loginPopup() {
    this.dialog.open(LoginComponent);
  }
  


// company_list(){
//   return this.CompanyService.getCompanyList().subscribe((data: {}) => {
//     this.Company = data;
//     console.log( this.Company);
//   })
// }
}
