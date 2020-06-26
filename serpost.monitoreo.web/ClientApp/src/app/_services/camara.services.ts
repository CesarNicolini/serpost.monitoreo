import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class CamaraService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }

    // getById(id: number) {
    //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    // }

    getCameraPerUser ()
    {
        return this.http.get<any[]>('/Camara/user');
    }
}