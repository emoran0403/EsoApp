import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from './constants';
import { writ } from 'constants/writs';

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

  create(writ: writ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });

    return this.http.post(URLS.writs.createOne, writ, { headers });
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
