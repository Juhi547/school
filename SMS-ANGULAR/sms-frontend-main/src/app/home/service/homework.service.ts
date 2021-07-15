import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  
  headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http: HttpClient) { }

  //Create 
  createHomework(data): Observable<any> {
    let url=`${environment.apiUrl}/homeworks`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt),
    );
  }

  //Get All Homeworks
  getHomeworks() {
    return this.http.get(`${environment.apiUrl}/homeworks`);
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
