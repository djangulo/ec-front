import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Staff } from './';

@Injectable()
export class StaffService {
    private headers = new Headers({'Content-Type': 'application/json'});
    // private staffUrl = 'http://localhost:8000/api/v1/staff/?format=json'; // currently on localhost:8000, change later to actual domain
    private staffUrl = 'http://localhost:8000/api/v1/staff/'; // currently on localhost:8000, change later to actual domain

    constructor(private http: Http) { }

    getStaff(): Promise<Staff[]> {
        return this.http.get(this.staffUrl)
            .toPromise()
            .then(response => response.json().results as Staff[])
            .catch(this.handleError);
    }
    // getInterns(): Promise<Staff[]> {
    //     return this.ht
    // }
    getStaffMember(username: string): Promise<Staff> {
        const url = `${this.staffUrl}/${username}/`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Staff)
            .catch(this.handleError)
    }


    delete(id: number): Promise<void> {
        const url = `${this.staffUrl}/${id}/`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(staff: Staff): Promise<Staff> {
        return this.http
            .post(this.staffUrl, JSON.stringify({staff}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Staff)
            .catch(this.handleError);
    }

    update(staff: Staff): Promise<Staff> {
    const url = `${this.staffUrl}/${staff.id}`;
        return this.http
            .put(url, JSON.stringify(staff), {headers: this.headers})
            .toPromise()
            .then(() => staff)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}