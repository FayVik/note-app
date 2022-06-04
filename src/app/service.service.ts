import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface loginData {
  email: string;
  password: string;
}

export interface signupData extends loginData {
  first_name: string;
  last_name: string;
}

export interface UserResponse {
  id: 0;
  email: string;
  first_name: string;
  last_name: string;
  created: string;
  updated: string;
}

export interface UserAPIResponse {
  status: string;
  message: string;
  data: UserResponse;
}

export interface NewNote {
  title: string;
  content: string;
}

export interface Identify {
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public loginUser(requestData: loginData): Observable<any> {
    return this.http
      .post<UserAPIResponse>(
        'https://note-xyz.herokuapp.com/api/v1/user/login',
        requestData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let status = 500;
          let data: object | string | undefined;
          if (error.error instanceof Error) {
            status = error.status;
            data = { message: error.error.message };
          } else if (error.error) {
            status = error.error.status || 500;
            data = error.error.message || '';
          }

          console.log({ error: { status, data } });
          return throwError(() => ({
            status,
            data,
          }));
        })
      );
  }

  public createUser(requestData: signupData): Observable<any> {
    return this.http
      .post<UserAPIResponse>(
        'https://note-xyz.herokuapp.com/api/v1/user/',
        requestData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let status = 500;
          let data: object | string | undefined;
          if (error.error instanceof Error) {
            status = error.status;
            data = { message: error.error.message };
          } else if (error.error) {
            status = error.error.status || 500;
            data = error.error.message || '';
          }

          console.log({ error: { status, data } });
          return throwError(() => ({
            status,
            data,
          }));
        })
      );
  }
  public createNote(requestData: NewNote): Observable<any> {
    return this.http
      .post<any>('https://note-xyz.herokuapp.com/api/v1/note/', requestData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let status = 500;
          let data: object | string | undefined;
          if (error.error instanceof Error) {
            status = error.status;
            data = { message: error.error.message };
          } else if (error.error) {
            status = error.error.status || 500;
            data = error.error.message || '';
          }

          console.log({ error: { status, data } });
          return throwError(() => ({
            status,
            data,
          }));
        })
      );
  }

  public getNote(requestData: Identify): Observable<any> {
    return this.http
      .get<any>(`https://note-xyz.herokuapp.com/api/v1/note/${requestData}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let status = 500;
          let data: object | string | undefined;
          if (error.error instanceof Error) {
            status = error.status;
            data = { message: error.error.message };
          } else if (error.error) {
            status = error.error.status || 500;
            data = error.error.message || '';
          }

          console.log({ error: { status, data } });
          return throwError(() => ({
            status,
            data,
          }));
        })
      );
  }

  public deleteNote(requestData: Identify): Observable<any> {
    return this.http
      .delete<any>(`https://note-xyz.herokuapp.com/api/v1/note/${requestData}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let status = 500;
          let data: object | string | undefined;
          if (error.error instanceof Error) {
            status = error.status;
            data = { message: error.error.message };
          } else if (error.error) {
            status = error.error.status || 500;
            data = error.error.message || '';
          }

          console.log({ error: { status, data } });
          return throwError(() => ({
            status,
            data,
          }));
        })
      );
  }
}
