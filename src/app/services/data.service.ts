import { Injectable } from '@angular/core';
import { chain, size, forEach } from 'lodash';
import { any_trait, item } from '../shared/models';

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
   * @param rawData DB response for the all traits query
   * @returns An object describing the number of traits on each item
   */
  formatTraits(rawData: any[]): item[] {
    const [rawCopy] = rawData;
    delete rawCopy.player_uuid;

    const collectedItems = [];

    for (const entry in rawCopy) {
      const value = rawCopy[entry];
      const splitEntry = entry.split('_');
      const splitEntryLength = size(splitEntry);

      const trait = splitEntry[splitEntry.length - 1];
      let item = '';
      if (splitEntryLength === 3) {
        item = splitEntry[0] + splitEntry[1];
      } else {
        item = splitEntry[0];
      }

      collectedItems.push({ item: item, trait: trait, value: value });
    }

    const reducedItems = chain(collectedItems)
      .groupBy('item')
      .map((groupedItems, item) => {
        const reducedObject = { item };

        forEach(groupedItems, ({ trait, value }) => {
          reducedObject[trait] = value;
        });
        return reducedObject;
      })
      .value();

    // console.log('reducedArr: ', reducedItems);

    return reducedItems as item[];
  }

  lowercaseNoSpace(array: string[]): string[] {
    return array.map((str) => str.toLowerCase().replace(/\s/g, ''));
  }

  makeTupleArray(obj: Record<string, any>): [string, boolean][] {
    return Object.entries(obj);
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
