import { MANDATORY_SPINNING_DEGREES } from '../constants';

export const generateFloors = (persons: Persons): Floors => {
  const floors = [];
  for (const [index] of persons.entries()) {
    floors.push(index / persons.length);
  }
  return floors;
};

export const getWinningIndex = (floors: Floors, random: Random) => {
  // Floors include 0, which we don't need to test against, so we slice it off
  const foundIndex = floors.slice(1).findIndex((floor) => random < floor);

  /* If findIndex returns -1, we know that it is the last possible index because
  that means the random number was greater than all possible options, and there
  is no 1 included in the floors array */
  return foundIndex !== -1 ? foundIndex : floors.length - 1;
};

export const getWinningDegrees = (floorsLength: number, winningIndex: Index) =>
  (winningIndex / floorsLength) * -360 - MANDATORY_SPINNING_DEGREES;
