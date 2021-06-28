import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../Services/company.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Company } from '../../class/Company';
import { Contractor } from '../../class/Contractor';
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
  disabled= true;
  C_full_name = new FormControl('', [ Validators.required, Validators.minLength(2)]);
  C_short_name = new FormControl('', [ Validators.required]);
  Contract_email = new FormControl('', [ Validators.required, Validators.email]);
  Contract_password = new FormControl('', [ Validators.required, Validators.minLength(5)]);
  Contract_password2 = new FormControl('', [ Validators.required, Validators.minLength(5)]);
  No_employees = new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$")]);
  Website = new FormControl('', [ Validators.required]);
  Contract_designation = new FormControl('', [ Validators.required,]);
  Contract_phone = new FormControl('', [ Validators.required]);




  ngOnInit(): void {
  //this.company_list(); 
  this.registerForm = this.formBuilder.group({
    C_full_name : this.C_full_name,
    C_short_name : this.C_short_name,
    Contract_email : this.Contract_email,
    Contract_password : this.Contract_password, 
    No_employees : this.No_employees,
    Website : this.Website,
    Contract_designation : this.Contract_designation,
    Contract_phone : this.Contract_phone, 


  },);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`); 
  this.disabled = false;
  }
 
  onSubmit() {
    this.submitted = true;    
    if (this.registerForm.invalid) {
      alert("All fields are mandatory");
        return;
    }else if(this.Contract_password !==this.Contract_password2){
      alert("Passwords do not match");
    }
    else{

      this.disabled = true; 
       var companyData = new Company();
      companyData.C_full_name = this.registerForm.value.C_full_name;
      companyData.C_short_name = this.registerForm.value.Company_email;
      companyData.No_employees = this.registerForm.value.Company_email;
      companyData.Website = this.registerForm.value.Company_email; 

      var contractorData = new Contractor(); 
      contractorData.Contract_email = this.registerForm.value.Contract_email;
      contractorData.Contract_password = this.registerForm.value.Contract_password;
      contractorData.Contract_designation = this.registerForm.value.Contract_designation;
      contractorData.Contract_phone = this.registerForm.value.Contract_phone;
        
       this.CompanyService.insertCompany(companyData , contractorData).subscribe( data => {
         this.Company = data;
         console.log("-------"); 
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
