import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { ContactMessage } from './contact-message.model';

@Injectable()
export class ContactService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private messagesUrl = 'https://ec.djangulo.com/api/v1/post-message/';

    constructor(private http: Http) { }

    sendMessage(message: ContactMessage): Observable<ContactMessage> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.messagesUrl, { message }, options)
                    .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
