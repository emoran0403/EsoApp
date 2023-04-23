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

  // this needs to contact the server with the required information
  contactDB = {
    GET: {
      playerWrits: 'gets player entered writs',
      loginInfo: 'gets player login info',
      unlockData: 'gets style and trait info',
    },
    POST: {
      newPlayer: 'creates style and trait tables for a new player',
    },
    PUT: {
      updatePlayerInfo: 'updates player info table with new player info',
      updateTrait: 'updates a trait table',
      updateStyle: 'updates a style table',
    },
    // i dont think ill need this
    DELETE: {},
  };
}
