import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Buttons from './Buttons';
import Circle from './Circle';
import { STUB } from './constants';
import theme from './theme';

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.mainBgColor};
  height: 100%;
`;

const StyledCircleContainer = styled.section`
  --x-padding: 1rem;
  border-radius: 50%;
  margin-inline: auto;
  position: relative;
  width: calc(100vmin - 2 * var(--x-padding));
`;

const StyledArrow = styled.div`
  aspect-ratio: 2/1;
  background-color: ${(props) => props.theme.arrowBgColor};
  margin-bottom: 2rem;
  margin-inline: auto;
  width: 10vmin;
`;

const App = () => {
  const [random, setRandom] = useState<null | number>(null);
  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <StyledArrow />
        <StyledCircleContainer>
          <Circle
            aria-labelledby="header"
            key={random}
            random={random}
            persons={STUB}
          />
          <Buttons random={random} setRandom={setRandom} />
        </StyledCircleContainer>
      </StyledMain>
    </ThemeProvider>
  );
};

export default App;
