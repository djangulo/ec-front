import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './';
import { Work } from './../works';
import { Publication } from './../publications';


@Injectable()
export class CategoryService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private categoriesUrl = 'https://ec.djangulo.com/api/v1/categories'; // currently on localhost:8000, change later to actual domain
    private worksUrl = 'https://ec.djangulo.com/api/v1/works'; // currently on localhost:8000, change later to actual domain
    private publicationsUrl = 'https://ec.djangulo.com/api/v1/publications'; // currently on localhost:8000, change later to actual domain
    private pressUrl = 'https://ec.djangulo.com/api/v1/press'; // currently on localhost:8000, change later to actual domain

    constructor(private http: Http) { }

    getCategories(): Promise<Category[]> {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(response => response.json().data.results as Category[])
            .catch(this.handleError);
    }
    getCategory(slug: string): Promise<Category> {
        const url = `${this.categoriesUrl}/${slug}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Category)
            .catch(this.handleError);
    }

    getPublicationCategor



    delete(id: number): Promise<void> {
        const url = `${this.categoriesUrl}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(category: Category): Promise<Category> {
        return this.http
            .post(this.categoriesUrl, JSON.stringify({category}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Category)
            .catch(this.handleError);
    }

    update(category: Category): Promise<Category> {
    const url = `${this.categoriesUrl}/${category.id}`;
        return this.http
            .put(url, JSON.stringify(category), {headers: this.headers})
            .toPromise()
            .then(() => category)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}