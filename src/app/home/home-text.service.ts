import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeTextService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'https://ec.djangulo.com/api/v1/home-images/text';

    constructor(private http: Http) { }

    getText(): Promise<any> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().hometext as any)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(text: string): Promise<string> {
        return this.http
            .post(this.url, JSON.stringify({text}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as string)
            .catch(this.handleError);
    }

    update(text: string): Promise<string> {
        return this.http
            .put(this.url, JSON.stringify(text), {headers: this.headers})
            .toPromise()
            .then(() => text)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
