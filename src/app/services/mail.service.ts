import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  // REST API server
  basicUrl = 'https://portfolio-email-service.herokuapp.com';

  sendMail(from: string, subject: string, text: string) {
    // If data is empty return an error
    if (!from || !subject || !text) {
      const error = new Error('Bad request data');
      return throwError(error);
    }

    const mail = {
      from,
      subject,
      text
    };

    return this.http.post(`${this.basicUrl}/api/mail/send`, mail);
  }
}
