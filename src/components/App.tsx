import StoreProvider from '../contexts/Store';
import Container from './Container';

const App = () => {
  return (
    <StoreProvider>
      <Container />
    </StoreProvider>
  );
};

export default App;
