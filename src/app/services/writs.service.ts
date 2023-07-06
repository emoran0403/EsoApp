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

  getAllWrits(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '100',
    });

    return this.http.get(URLS.traits.getAll, { headers });
  }
}
