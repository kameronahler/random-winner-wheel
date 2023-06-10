import styled from 'styled-components';
import StoreProvider from '../contexts/Context';
import Circle from './Circle';

const StyledArrow = styled.div`
  aspect-ratio: 2/1;
  background-color: ${(props) => props.theme.arrowBgColor};
  margin-bottom: 2rem;
  margin-inline: auto;
  width: 10vmin;
`;

const App = () => {
  return (
    <StoreProvider>
      <StyledArrow />
      <Circle />
    </StoreProvider>
  );
};

export default App;
