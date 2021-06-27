import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  no: number;
  name: string;
  designation: string;
  rate: string; 
  email : string;
  benchDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  {no: 1, name: 'John C', designation: 'Software engineer', rate: '$120' ,email:'john@gmail.com', benchDate:'11-01-2021'} ,
  {no: 2, name: 'Benjamin Jose', designation: 'Test engineer', rate: '$100' ,email:'Benjamin@gmail.com', benchDate:'12-2-2021'} ,
  {no: 3, name: 'Akhila Benny', designation: 'Web Developer', rate: '$133' ,email:'Akhila@gmail.com', benchDate:'02-05-2021'} ,
  {no: 4, name: 'Thomas Biju', designation: 'System Analyst', rate: '$140' ,email:'Thomas@gmail.com', benchDate:'22-03-2021'} ,
  {no: 5, name: 'Jerin K', designation: 'Product Manager', rate: '$130' ,email:'Jerin@gmail.com', benchDate:'10-12-2021'} ,
  {no: 6, name: 'Joel P', designation: 'Testing Trainee', rate: '$10' ,email:'Joel@gmail.com', benchDate:'12-01-2021'} ,
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'name','designation', 'rate', 'email','benchDate'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
