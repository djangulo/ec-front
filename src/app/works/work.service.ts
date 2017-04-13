import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Work } from './';
import { Category } from './../categories';

@Injectable()
export class WorkService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private worksUrl = 'http://localhost:8000/api/v1/works/'; // currently on localhost:8000, change later to actual domain

    constructor(private http: Http) { }

    getWorks(): Promise<Work[]> {
        return this.http.get(this.worksUrl)
            .toPromise()
            .then(response => response.json().data.results as Work[])
            .catch(this.handleError);
    }
    getWork(id: number): Promise<Work> {
        const url = `${this.worksUrl}/${id}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Work)
            .catch(this.handleError)
    }


    delete(id: number): Promise<void> {
        const url = `${this.worksUrl}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(work: Work): Promise<Work> {
        return this.http
            .post(this.worksUrl, JSON.stringify({work}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Work)
            .catch(this.handleError);
    }

    update(work: Work): Promise<Work> {
    const url = `${this.worksUrl}/${work.id}`;
        return this.http
            .put(url, JSON.stringify(work), {headers: this.headers})
            .toPromise()
            .then(() => work)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}