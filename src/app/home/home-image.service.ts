import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HomeImage } from './home-image.model';

@Injectable()
export class HomeImageService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'https://ec.djangulo.com/api/v1/home-images/';

    constructor(private http: Http) { }

    getImages(): Promise<HomeImage[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().results as HomeImage[])
            .catch(this.handleError);
    }

    getImage(id: number): Promise<HomeImage> {
        const url = `${this.url}/${id}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as HomeImage)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(image: HomeImage): Promise<HomeImage> {
        return this.http
            .post(this.url, JSON.stringify({image}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as HomeImage)
            .catch(this.handleError);
    }

    update(image: HomeImage): Promise<HomeImage> {
    const url = `${this.url}/${image.id}`;
        return this.http
            .put(url, JSON.stringify(image), {headers: this.headers})
            .toPromise()
            .then(() => image)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
