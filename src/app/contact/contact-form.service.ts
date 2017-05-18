import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ReCaptchaResponse } from './recaptcha/recaptcha-response.model';

import { ContactMessage } from './contact-message.model';

@Injectable()
export class ContactService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private messagesUrl = 'https://ec.djangulo.com/api/v1/post-message/';
  private verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
  private secret: string = '6LeAzSEUAAAAAMGPVOEQ7bJc5JnFZ__TWe70jx6H';

  constructor(private http: Http) { }

  captchaVerify(token: string): Promise<ReCaptchaResponse> {
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers });
    let body = {
      secret: this.secret,
      response: token
    };
    return this.http
          .post(this.verifyUrl, JSON.stringify({body}), options)
          .toPromise()
          .then()
  }

  // sendMessage(message: ContactMessage): Observable<ContactMessage> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   // return this.http.post(this.messagesUrl, { message }, options)
  //   //         .map(this.extractData)
  //   //         .catch(this.handleError)
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
