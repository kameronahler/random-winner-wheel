import GrossContextProvider from '../contexts/Context';
import Container from './Container';

const App = () => {
  return (
    <GrossContextProvider>
      <Container />
    </GrossContextProvider>
  );
};

export default App;
