import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Company } from '../class/Company';
import { Contractor } from '../class/Contractor';

 @Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private REST_API_SERVER = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
    } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
 getCompanyList(): Observable<any> {
  return this.http.get<any>(this.REST_API_SERVER + '/company/companylist')
  .pipe(retry(1),
    catchError(this.handleError)
  )
}
insertCompany(company , contractor): Observable<any>{
  var data = {
    'C_full_name' : company.C_full_name,
    'C_short_name': company.C_short_name,
    'No_employees': company.No_employees,
    'Website': company.Website,
    'Contract_email': contractor.Contract_email,
    'Contract_password': contractor.Contract_password,
    'Contract_designation': contractor.Contract_designation,
    'Contract_phone': contractor.Contract_phone,

  } 
  return this.http.post<any>(this.REST_API_SERVER + '/company/signup/', data);
}  
companyLogin(company): Observable<Company[]>{
  return this.http.post<Company[]>(this.REST_API_SERVER + '/company/login/', company);
}  

}
