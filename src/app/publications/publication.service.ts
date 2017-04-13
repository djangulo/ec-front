import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Publication } from './';

@Injectable()
export class PublicationService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private publicationsUrl = 'http://localhost:8000/api/v1/publications/'; // currently on localhost:8000, change later to actual domain

    constructor(private http: Http) { }

    getPublications(): Promise<Publication[]> {
        return this.http.get(this.publicationsUrl)
            .toPromise()
            .then(response => response.json().data.results as Publication[])
            .catch(this.handleError);
    }
    getPublication(id: number): Promise<Publication> {
        const url = `${this.publicationsUrl}/${id}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Publication)
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        const url = `${this.publicationsUrl}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(publication: Publication): Promise<Publication> {
        return this.http
            .post(this.publicationsUrl, JSON.stringify({publication}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Publication)
            .catch(this.handleError);
    }

    update(publication: Publication): Promise<Publication> {
    const url = `${this.publicationsUrl}/${publication.id}`;
        return this.http
            .put(url, JSON.stringify(publication), {headers: this.headers})
            .toPromise()
            .then(() => publication)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}