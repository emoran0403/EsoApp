import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataAlteringService {
  constructor() {}

  /**
   * Alphabetizes an array
   * @param data as an array
   * @returns alphabetized array
   */
  alphabetize<T>(data: T[]): T[] {
    return data.sort();
  }
}
