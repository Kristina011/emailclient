import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

interface userNameAvailableResponse {
  available: boolean;
}
interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SignUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SigninResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(null);
  username = '';

  constructor(private http: HttpClient) { }

  userNameAvailable(username: string) {
    return this.http.post<userNameAvailableResponse>(
      this.rootUrl + '/auth/username',
      {
      username
    });
  }

  signUp(credentials: SignupCredentials) {
    return this.http.post<SignUpResponse>(
      `${this.rootUrl}/auth/signup`, credentials)
    .pipe(
      tap((response) => {
        this.signedIn$.next(true);
        this.username = response.username;
      })
    );
  }

  checkAuthForSignedIn() {
    return this.http.get<SignedInResponse>(
      `${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({authenticated, username}) => {
          // console.log(authenticated));
          this.signedIn$.next(authenticated);
          this.username = username;
      })
    );
  }

  signOut() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.signedIn$.next(false);
        })
      );
  }

  signIn(credentials: SigninCredentials) {
    return this.http.post <SigninResponse>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(({username}) => {
          this.signedIn$.next(true);
          this.username = username;
        })
      );
  }
}
