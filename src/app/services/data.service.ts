import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  /**
   * Alphabetizes an array
   * @param data A string array
   * @returns An alphabetized string array
   */
  alphabetize(data: string[]): string[] {
    return data.sort();
  }

  /**
   * Consumes the response from the all traits query and outputs an object with the number of traits learned on each item
   * @param data DB response for the all traits query
   * @returns An object describing the number of traits on each item
   */
  countTraits(data: any[]): any {
    const [traits] = data;
    const player_uuid = traits.player_uuid;
    delete traits.player_uuid;

    const occurrences = {};

    for (const prop in traits) {
      if (traits.hasOwnProperty(prop) && traits[prop] === true) {
        const item = prop.split('_')[0];
        occurrences[item] = (occurrences[item] || 0) + 1;
      }
    }

    return occurrences;
  }
}
