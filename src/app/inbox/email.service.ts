import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Email } from './email';


interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
    // we would include {withCredentials: true} but no need
    // because we have http interceptor to automatically add it
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
    }

  sendEmail(email: Email) {
    return this.http.post(`${this.rootUrl}/emails/`, email);
  }
}


