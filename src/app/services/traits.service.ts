import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { map } from 'rxjs';
import { URLS } from './constants';

@Injectable({
  providedIn: 'root',
})
export class TraitsService {
  constructor(
    private readonly http: HttpClient,
    private readonly data: DataService
  ) {}

  getAllTraits(item: string): Observable<any> {
    console.log('getAllTraits - item: ', item);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
      item,
    });

    return this.http.get(URLS.traits.getAll, { headers });
  }

  updateOneTrait(item: string, trait: string, value: boolean): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });
    const body = {
      player_uuid: '69',
      item,
      trait,
      value,
    };

    const stringifiedBody = JSON.stringify(body);
    // console.log('raw body from service: ', body);
    // console.log('stringifiedBody from service: ', stringifiedBody);
    return this.http.put(URLS.traits.updateOne, stringifiedBody, { headers });
  }

  updateMultileTraits(item: string, value: boolean): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
    });
    const body = {
      player_uuid: '69',
      item,
      value,
    };
    const stringifiedBody = JSON.stringify(body);
    return this.http.put(URLS.traits.updateMultiple, stringifiedBody, {
      headers,
    });
  }
}
