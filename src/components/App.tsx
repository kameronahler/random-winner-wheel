import StoreProvider from '../contexts/Context';
import Arrow from './Arrow';
import Circle from './Circle';

const App = () => {
  return (
    <StoreProvider>
      <Arrow />
      <Circle />
    </StoreProvider>
  );
};

export default App;
