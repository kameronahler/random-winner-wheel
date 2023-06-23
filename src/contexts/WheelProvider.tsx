import { useFormikContext } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { generateFloors, getWinningDegrees, getWinningIndex } from '../helpers';

export const WheelContext = React.createContext<WheelContextData>({
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

const WheelProvider = ({ children }: WheelContextProvider) => {
  const {
    values: { persons },
  } = useFormikContext<PersonsFormikValues>();
  const floors = useMemo(() => generateFloors(persons), [persons]);
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
    <WheelContext.Provider
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
    </WheelContext.Provider>
  );
};

export default WheelProvider;
