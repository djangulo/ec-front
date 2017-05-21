
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { PressRelease } from './press.model';

@Injectable()
export class PressService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pressUrl = 'https://ec.djangulo.com/api/v1/press/'; // currently on localhost:8000, change later to actual domain

  constructor(private http: Http) { }
  getAllPress(): Observable<PressRelease[]> {
    return this.http.get(this.pressUrl)
        .map(response => response.json().results as PressRelease[])
        .catch(this.handleError);
  }

  getLatestPress(): Observable<PressRelease[]> {
    const url = `${this.pressUrl}/latest/`
    return this.http.get(url)
        .map(response => response.json().results as PressRelease[])
        .catch(this.handleError);
  }

  getPressForMonth(year: number, month: number): Observable<PressRelease[]> {
    const url = `${this.pressUrl}/archive/${year}/${month}`
    return this.http.get(url)
        .map(response => response.json().results as PressRelease[])
        .catch(this.handleError);
  }

  getPressDates(): Observable<any[]> {
    const url = `${this.pressUrl}/archive/`
    return this.http.get(url)
        .map(response => response.json().results)
        .catch(this.handleError);
  }

  getPress(id: number): Observable<PressRelease> {
    const url = `${this.pressUrl}/${id}/`
    return this.http.get(url)
        .map(response => response.json() as PressRelease)
        .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
      const url = `${this.pressUrl}/${id}/`;
      return this.http.delete(url, {headers: this.headers})
          .map(() => null)
          .catch(this.handleError);
  }

  create(pressRelease: PressRelease): Observable<PressRelease> {
    return this.http
      .post(this.pressUrl, JSON.stringify({pressRelease}), {headers: this.headers})
      .map(res => res.json() as PressRelease)
      .catch(this.handleError);
  }

  update(pressRelease: PressRelease): Observable<PressRelease> {
  const url = `${this.pressUrl}/${pressRelease.id}`;
    return this.http
      .put(url, JSON.stringify({pressRelease}), {headers: this.headers})
      .map(() => pressRelease)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
