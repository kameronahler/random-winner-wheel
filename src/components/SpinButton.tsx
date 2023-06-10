import { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../contexts/Context';

const StyledButton = styled.button`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.spinButtonBgColor};
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 1);
  border-radius: 50%;
  border: ${(props) => `${props.theme.circleBorderWidth} solid
    ${props.theme.spinButtonBorderColor}`};
  display: block;
  font-size: clamp(1rem, 3vmin, 3rem);
  font-weight: 700;
  height: 14vmin;
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

  return (
    <StyledButton onClick={random ? handleReset : handleSpin}>
      {random ? 'Reset' : 'Spin'}
    </StyledButton>
  );
};

export default SpinButton;
