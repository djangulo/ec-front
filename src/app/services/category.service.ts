import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {
    Category,
    Publication,
    Work    
} from './../models/';

@Injectable()
export class CategoryService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private categoriesUrl = 'http://localhost:8000/api/v1/categories/'; // currently on localhost:8000, change later to actual domain
    private worksUrl = 'http://localhost:8000/api/v1/works/'; // currently on localhost:8000, change later to actual domain
    private publicationsUrl = 'http://localhost:8000/api/v1/publications/'; // currently on localhost:8000, change later to actual domain

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
            .catch(this.handleError)
    }
    getWorkCategories(): Promise<Category[]> {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(function(response) {
                var workCategories: Category[];
                for (let c of response.json().data.results) {
                    if (c.works.length > 0) {
                        workCategories.push(c)
                    }
                }
                return workCategories
            })
            .catch(this.handleError)
    }
    getWorksByCategory(slug: string): Promise<Work[]> {
        const url = `${this.worksUrl}/categories/${slug}/`
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data.results as Work[])
            .catch(this.handleError)
    }
    getPublicationCategories(): Promise<Category[]> {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(function(response) {
                var publicationCategories: Category[];
                for (let c of response.json().data.results) {
                    if (c.publications.length > 0) {
                        publicationCategories.push(c)
                    }
                }
                return publicationCategories
            })
            .catch(this.handleError)
    }
    getPublicationsByCategory(slug: string): Promise<Work[]> {
        const url = `${this.worksUrl}/categories/${slug}/`
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data.resulta as Work[])
            .catch(this.handleError)
    }
    getPressCategories(): Promise<Category[]> {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(function(response) {
                var pressCategories: Category[];
                for (let c of response.json().data.results) {
                    if (c.press_releases.length > 0) {
                        pressCategories.push(c)
                    }
                }
                return pressCategories
            })
            .catch(this.handleError)
    }



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