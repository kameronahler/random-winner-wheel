import { MANDATORY_SPINNING_DEGREES } from '../constants';

export const generateFloors = (persons: Persons): Floors => {
  const floors = [];
  for (const [index] of persons.entries()) {
    floors.push(index / persons.length);
  }
  return floors;
};

export const getWinningIndex = (floors: Floors, random: Random) =>
  floors.findIndex((floor) => random <= floor);

export const getWinningDegrees = (floorsLength: number, winningIndex: Index) =>
  (winningIndex / floorsLength) * -360 + MANDATORY_SPINNING_DEGREES;
