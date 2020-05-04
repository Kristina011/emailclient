import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// One way:

// export class AppComponent implements OnInit {
//   signedIn = false;
//
//   constructor(private authService: AuthService) {}
//
//   ngOnInit() {
//     this.authService.signedIn$.subscribe(signedIn => {
//       this.signedIn = signedIn;
//     });
//   }
// }

// Another way:

export class AppComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit() {
    this.authService.checkAuthForSignedIn().subscribe(() => {});
  }
}
