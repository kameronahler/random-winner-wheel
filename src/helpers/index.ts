import {
  INITIAL_FORMIK_VALUES,
  INITIAL_PERSONS,
  LOCAL_KEY,
  MANDATORY_SPINNING_DEGREES,
} from '../constants';

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

export const getNewPersonFromFormik = ({
  newName,
  newSrc: newSrc,
}: PersonsFormikValues) => ({
  name: newName,
  src: newSrc,
});

export const getUpdatedFormikValues = (values: PersonsFormikValues) => ({
  newName: INITIAL_FORMIK_VALUES.newName,
  newSrc: INITIAL_FORMIK_VALUES.newSrc,
  persons: [...values.persons, getNewPersonFromFormik(values)],
});

export const setLocalStoragePersons = (values: PersonsFormikValues) =>
  localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify(getUpdatedFormikValues(values).persons)
  );

export const setLocalStoragePersonsWithoutIndex = (
  persons: Persons,
  index: Index
) => {
  const newPersons = [...persons];
  newPersons.splice(index, 1);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(newPersons));
};

export const getLocalStoragePersons = (): Persons => {
  const localPersons = localStorage.getItem(LOCAL_KEY);
  return localPersons ? JSON.parse(localPersons) : INITIAL_PERSONS;
};
