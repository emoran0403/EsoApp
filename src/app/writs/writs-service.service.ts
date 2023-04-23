import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { writ } from '../../../constants/writs';

@Injectable({
  providedIn: 'root',
})
export class WritsService {
  constructor(private readonly http: HttpClient) {}

  getWrits(): Observable<any> {
    return this.http.get('');
  }

  newWrit(writ: writ): Observable<any> {
    return this.http.post('', writ);
  }

  updateWrit(writ: writ): Observable<any> {
    return this.http.put('', writ);
  }
}
