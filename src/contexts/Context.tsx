import React, { useState } from 'react';

export const StoreContext = React.createContext<Store>({
  random: null,
  setRandom: () => null,
});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [random, setRandom] = useState<RandomOrNull>(null);

  return (
    <StoreContext.Provider value={{ random, setRandom }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
