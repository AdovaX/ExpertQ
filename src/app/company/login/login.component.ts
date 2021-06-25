import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../Services/company.service';
import { Company } from '../../class/Company';
import {Router} from "@angular/router"
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  Company: Company[];
  loginstatus = false;

  constructor(private CompanyService:CompanyService,private formBuilder: FormBuilder,private router:Router,public dialog: MatDialog) { }
  hide = true;

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({ 
    Company_email :['', Validators.required],
    Company_password :['', Validators.required],

  });
  }
  onSubmit() {    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert("All fields are mandatory");
        return;
    }else{
 
       var loginData = new Company(); 
       loginData.Company_email = this.loginForm.value.Company_email;
       loginData.Company_password = this.loginForm.value.Company_password;
       
       this.CompanyService.companyLogin(loginData).subscribe( data => {
         console.log("-------");
         console.log(this.Company);
         if(typeof data[0] === 'undefined'){
          this.loginstatus=true;
         }else{
          this.Company = data;
          this.dialog.closeAll(); 
          this.router.navigate(['company/Dashboard']);

         }

       });
     
      
    }

  }

}
