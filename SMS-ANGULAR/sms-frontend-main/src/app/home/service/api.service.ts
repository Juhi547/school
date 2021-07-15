import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 // apiUrl:string = 'https://vayati-sms-backend.herokuapp.com';
  headers=new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http: HttpClient) { }

  //Create 
  createParent(data): Observable<any> {
    let url=`${environment.apiUrl}/parents`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt),
    );
  }

  //Get All Parents
  getParents() {
    return this.http.get(`${environment.apiUrl}/parents`);
  }

  // Get Parent by id
  getParentById(id): Observable<any> {
    let url = `${environment.apiUrl}/parents/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  
 // Error handling 
 errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}
