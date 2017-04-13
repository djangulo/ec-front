import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PressRelease } from './';

@Injectable()
export class PressReleaseService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private pressReleasesUrl = 'http://localhost:8000/api/v1/press-releases/'; // currently on localhost:8000, change later to actual domain

    constructor(private http: Http) { }

    getPressReleases(): Promise<PressRelease[]> {
        return this.http.get(this.pressReleasesUrl)
            .toPromise()
            .then(response => response.json().data.results as PressRelease[])
            .catch(this.handleError);
    }
    getPressRelease(id: number): Promise<PressRelease> {
        const url = `${this.pressReleasesUrl}/${id}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as PressRelease)
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        const url = `${this.pressReleasesUrl}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(pressRelease: PressRelease): Promise<PressRelease> {
        return this.http
            .post(this.pressReleasesUrl, JSON.stringify({pressRelease}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as PressRelease)
            .catch(this.handleError);
    }

    update(pressRelease: PressRelease): Promise<PressRelease> {
    const url = `${this.pressReleasesUrl}/${pressRelease.id}`;
        return this.http
            .put(url, JSON.stringify(pressRelease), {headers: this.headers})
            .toPromise()
            .then(() => pressRelease)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}