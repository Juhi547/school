import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  headers=new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http: HttpClient) { }

  //Create 
  createStudent(data): Observable<any> {
    let url=`${environment.apiUrl}/students`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt),
    );
  }

  //Get All Students
  getStudents() {
    return this.http.get(`${environment.apiUrl}/students`);
  }
   // Get Student by id
   getStudentById(id): Observable<any> {
    let url = `${environment.apiUrl}/students/${id}`;
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
