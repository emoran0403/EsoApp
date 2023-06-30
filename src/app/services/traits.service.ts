import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TraitsService {
  constructor(private readonly http: HttpClient) {}

  getAllTraits(): Observable<any> {
    return this.http.get('http://localhost:3000/dev/esoapp/traits/all');
  }
}
