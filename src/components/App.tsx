import { useContext } from 'react';
import styled from 'styled-components';
import StoreProvider, { StoreContext } from '../contexts/Context';
import Circle from './Circle';
import Buttons from './SpinButton';

const StyledArrow = styled.div`
  aspect-ratio: 2/1;
  background-color: ${(props) => props.theme.arrowBgColor};
  margin-bottom: 2rem;
  margin-inline: auto;
  width: 10vmin;
`;

const App = () => {
  const { random } = useContext(StoreContext);

  return (
    <StoreProvider>
      <StyledArrow />
      <Circle key={random} />
      <Buttons />
    </StoreProvider>
  );
};

export default App;
