import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent   {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginComponent);
  }

}
