import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ReCaptchaResponse } from './recaptcha/recaptcha-response.model';

import { ContactMessage } from './contact-message.model';

@Injectable()
export class ContactService {
  private headers: Headers;
  private messagesUrl: string;
  private verifyUrl:string;
  private secret: string;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    this.messagesUrl = 'https://ec.djangulo.com/api/v1/post-message/';
    this.verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    this.secret = '6LeAzSEUAAAAAMGPVOEQ7bJc5JnFZ__TWe70jx6H';
  }

  captchaVerify(token: string): Observable<ReCaptchaResponse> {
    return this.http.post(
              this.verifyUrl,
              JSON.stringify({
                secret: this.secret,
                response: token
              }),
              {
                headers: this.headers
              }
      ).map(res => res.json() as ReCaptchaResponse)
      .catch(this.handleError)
  }

  // sendMessage(message: ContactMessage): Observable<ContactMessage> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   // return this.http.post(this.messagesUrl, { message }, options)
  //   //         .map(this.extractData)
  //   //         .catch(this.handleError)
  // }

    // private handleError(error: any): Promise<ReCaptchaResponse> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response | any) {
    let body = res.json();
    return body || { };
  }

}
