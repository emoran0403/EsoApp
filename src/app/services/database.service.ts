import { Injectable } from '@angular/core';

export type query = 'GET' | 'POST' | 'PUT' | 'DELETE';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  Query = (query: query, data: any) => {
    switch (query) {
      case 'GET':
        // make a GET request to the db
        break;
      case 'POST':
        // make a POST request to the db
        break;
      case 'PUT':
        // make a PUT request to the db
        break;
      case 'DELETE':
        // make a DELETE request to the db
        break;
    }
  };
}
