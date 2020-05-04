import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true
    });
    return next.handle(modifiedReq);
    // How watch the events around request:
      // .pipe(
      //   filter(val => val.type === HttpEventType.Response),
      //   tap(val => {
      //     console.log(val);
      //   })
      // );
  }
}
