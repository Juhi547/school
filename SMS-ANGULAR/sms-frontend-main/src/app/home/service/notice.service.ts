import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http: HttpClient) { }

  //Create 
  createNotice(data): Observable<any> {
    let url=`${environment.apiUrl}/notices`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt),
    );
  }

  //Get All Notices
  getNotices() {
    return this.http.get(`${environment.apiUrl}/notices`);
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
