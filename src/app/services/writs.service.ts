import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from './constants';

@Injectable({
  providedIn: 'root',
})
export class WritsService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });

    return this.http.get(URLS.writs.getAll, { headers });
  }

  create(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });

    return this.http.get(URLS.writs.createOne, { headers });
  }

  update(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });

    return this.http.get(URLS.writs.updateOne, { headers });
  }

  generateTable(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });

    return this.http.get(URLS.writs.generate, { headers });
  }
}
