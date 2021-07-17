import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface RequestLogin {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(requestLogin: RequestLogin) {
    return this.http.post('https://reqres.in/api/login', requestLogin).pipe(
      tap((resp: any) => localStorage.setItem('token', resp.token)),
      map((_) => true),
      catchError((err: HttpErrorResponse) => {
        console.log('error', err.error.error);

        return of({ isNotError: false, message: err.error.error });
      })
    );
  }
}
