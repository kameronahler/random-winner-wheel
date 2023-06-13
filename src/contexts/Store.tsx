import React, { useEffect, useState } from 'react';
import { SPIN_DURATION, STUB } from '../constants';
import { generateFloors, getWinningDegrees, getWinningIndex } from '../helpers';

export const StoreContext = React.createContext<Store>({
  degrees: null,
  floors: [],
  hasSpun: false,
  isDoneSpinning: false,
  random: null,
  setRandom: () => null,
  setIndex: () => null,
  index: null,
});

const StoreProvider = ({ children }: StoreProvider) => {
  const floors = generateFloors(STUB);
  const [random, setRandom] = useState<RandomOrNull>(null);
  const [index, setIndex] = useState<IndexOrNull>(null);
  const [degrees, setDegrees] = useState<RandomOrNull>(null);
  const [hasSpun, setHasSpun] = useState<HasSpun>(false);
  const [isDoneSpinning, setIsDoneSpinning] = useState<IsDoneSpinning>(false);

  useEffect(() => {
    setHasSpun(random ? true : false);
    setIndex(random !== null ? getWinningIndex(floors, random) : null);
  }, [floors, random]);

  useEffect(
    () =>
      setDegrees(
        index !== null ? getWinningDegrees(floors.length, index) : null
      ),
    [floors, index]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hasSpun && degrees) setIsDoneSpinning(true);
    }, SPIN_DURATION + 1000);

    setIsDoneSpinning(false);

    return () => clearTimeout(timeout);
  }, [degrees, hasSpun]);

  return (
    <StoreContext.Provider
      value={{
        degrees,
        floors,
        hasSpun,
        index,
        isDoneSpinning,
        random,
        setRandom,
        setIndex,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
