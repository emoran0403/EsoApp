import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraitsService {
  constructor(
    private readonly http: HttpClient,
    private readonly data: DataService
  ) {}

  getAllTraits(): Observable<any> {
    const url = 'http://localhost:3000/dev/esoapp/traits/all';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      player_uuid: '100',
    });

    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        const wow = this.data.countTraits(res);
        console.log('wow: ', wow);
        return this.data.countTraits(res);
      })
    );
  }
}
