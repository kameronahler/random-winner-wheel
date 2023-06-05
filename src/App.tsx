import { useState } from 'react';
import Circle from './Circle';
import Header from './Header';
import { STUB } from './constants';

const App = () => {
  const [random, setRandom] = useState<null | number>(null);
  return (
    <>
      <Header random={random} setRandom={setRandom} />
      <main>
        <Circle
          aria-labelledby="header"
          key={random}
          random={random}
          persons={STUB}
        />
      </main>
    </>
  );
};

export default App;
