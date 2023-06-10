import { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../contexts/Context';

const StyledButton = styled.button`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.buttonBgColor};
  border-radius: 50%;
  border: unset;
  display: block;
  font-size: clamp(1rem, 3vmin, 3rem);
  font-weight: 700;
  height: 15vmin;
  inset: 0;
  letter-spacing: 1px;
  margin: auto;
  padding: unset;
  position: absolute;
  text-transform: uppercase;
`;
const SpinButton = () => {
  const { random, setRandom } = useContext(StoreContext);

  const handleSpin = () => {
    setRandom(Math.random());
  };

  const handleReset = () => {
    setRandom(null);
  };

  return random ? (
    <StyledButton onClick={handleReset}>Reset</StyledButton>
  ) : (
    <StyledButton disabled={!!random} onClick={handleSpin}>
      Spin
    </StyledButton>
  );
};

export default SpinButton;
