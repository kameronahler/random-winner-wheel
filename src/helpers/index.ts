import { MIN_DEGREES } from '../constants';

export const getFloors = (persons: Persons) => {
  const floors = [];
  for (const [index, _] of persons.entries()) {
    const num = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    floors.push(+num.format((index + 1) / persons.length));
  }
  return floors;
};

export const getAngle = (floors: Floors, random: Random) => {
  const reducedFloors = floors.reduce((acc: number[], floor) => {
    return random < floor ? [...acc, floor] : acc;
  }, []);
  return (reducedFloors[0] ?? 1) * 360 + MIN_DEGREES;
};
