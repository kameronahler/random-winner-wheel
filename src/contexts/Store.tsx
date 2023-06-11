import React, { useState } from 'react';
import { STUB } from '../constants';
import { getFloors } from '../helpers';

export const StoreContext = React.createContext<Store>({
  floors: [],
  name: null,
  random: null,
  setName: () => null,
  setRandom: () => null,
});

const StoreProvider = ({ children }: StoreProvider) => {
  const [floors] = useState(getFloors(STUB));
  const [random, setRandom] = useState<RandomOrNull>(null);
  const [name, setName] = useState<NameOrNull>(null);

  return (
    <StoreContext.Provider value={{ floors, name, random, setName, setRandom }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
