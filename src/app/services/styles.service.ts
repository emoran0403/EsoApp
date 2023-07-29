import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from './constants';
import { styles } from 'constants/styles/styles';
import { motif_status } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class StylesService {
  constructor(private readonly http: HttpClient) {}

  getAllByMotif(motif_name: styles): Observable<motif_status> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '69',
      motif_name,
    });

    return this.http.get<motif_status>(URLS.styles.getAllByMotif, { headers });
  }

  updateOneStyle(
    item: string,
    motif_name: string,
    value: boolean
  ): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      item,
      motif_name,
      value,
      player_uuid: '69',
    };

    return this.http.put(URLS.styles.updateOne, body, { headers });
  }

  updateMultipleStyles(motif_name: string, value: boolean): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = {
      motif_name,
      value,
      player_uuid: '69',
    };

    return this.http.put(URLS.styles.updateMultiple, body, { headers });
  }
}
