import React, { useEffect, useMemo, useState } from 'react';
import { STUB } from '../constants';
import { generateFloors, getWinningDegrees, getWinningIndex } from '../helpers';

export const GrossContext = React.createContext<GrossContextData>({
  degrees: null,
  floors: [],
  isDone: false,
  isStarted: false,
  random: null,
  index: null,
  setDegrees: () => null,
  setIndex: () => null,
  setIsDone: () => null,
  setIsStarted: () => null,
  setRandom: () => null,
});

const GrossContextProvider = ({ children }: GrossContextProvider) => {
  const floors = useMemo(() => generateFloors(STUB), []);
  const [random, setRandom] = useState<RandomOrNull>(null);
  const [index, setIndex] = useState<IndexOrNull>(null);
  const [degrees, setDegrees] = useState<RandomOrNull>(null);
  const [isDone, setIsDone] = useState<IsDone>(false);
  const [isStarted, setIsStarted] = useState<IsStarted>(false);

  useEffect(() => {
    setIndex(random !== null ? getWinningIndex(floors, random) : null);
    setDegrees(index !== null ? getWinningDegrees(floors.length, index) : null);
  }, [floors, random, index]);

  return (
    <GrossContext.Provider
      value={{
        degrees,
        floors,
        index,
        isDone,
        isStarted,
        random,
        setDegrees,
        setIndex,
        setIsDone,
        setIsStarted,
        setRandom,
      }}
    >
      {children}
    </GrossContext.Provider>
  );
};

export default GrossContextProvider;
