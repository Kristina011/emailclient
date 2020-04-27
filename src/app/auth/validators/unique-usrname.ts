import {Injectable} from '@angular/core';
import {AsyncValidator, FormControl} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({providedIn: 'root'})
export class UniqueUsrname implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: FormControl) => {
    const { value } = control;

    return this.authService.userNameAvailable(value).pipe(
      map(value => {
        if (value.available) {
          return null;
        }
      }),
      catchError((err) => {
        // console.log(err);
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  }
}
