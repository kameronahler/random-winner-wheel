import React, { useEffect, useState } from 'react';
import { SPIN_DURATION, STUB } from '../constants';
import { generateFloors, getWinningDegrees, getWinningIndex } from '../helpers';

export const StoreContext = React.createContext<Store>({
  degrees: null,
  floors: [],
  isSpinning: null,
  random: null,
  setRandom: () => null,
  setIndex: () => null,
  setIsSpinning: () => null,
  index: null,
});

const StoreProvider = ({ children }: StoreProvider) => {
  const floors = generateFloors(STUB);
  const [random, setRandom] = useState<RandomOrNull>(null);
  const [index, setIndex] = useState<IndexOrNull>(null);
  const [degrees, setDegrees] = useState<RandomOrNull>(null);
  const [isSpinning, setIsSpinning] = useState<IsSpinningOrNull>(null);

  useEffect(
    () => setIndex(random ? getWinningIndex(floors, random) : null),
    [floors, random]
  );

  useEffect(
    () => setDegrees(index ? getWinningDegrees(floors.length, index) : null),
    [floors, index]
  );

  useEffect(() => {
    const timeout = setTimeout(() => setIsSpinning(false), SPIN_DURATION);
    return () => clearTimeout(timeout);
  }, [degrees]);

  return (
    <StoreContext.Provider
      value={{
        degrees,
        floors,
        index,
        isSpinning,
        random,
        setRandom,
        setIndex,
        setIsSpinning,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
