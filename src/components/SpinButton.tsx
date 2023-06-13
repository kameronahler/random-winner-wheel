import { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../contexts/Store';

const StyledButton = styled.button`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.spinButtonBgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 50%;
  border: ${(props) => `${props.theme.circleBorderWidth} solid
    ${props.theme.spinButtonBorderColor}`};
  cursor: pointer;
  display: block;
  font-size: clamp(1rem, 3vmin, 3rem);
  font-weight: 700;
  left: 50%;
  letter-spacing: 1px;
  padding: 1rem;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  translate: -50% -50%;

  &:active {
    scale: 0.9;
    transition: scale 0.2s ease;
  }
`;

const SpinButton = ({ text, ...rest }: SpinButtonProps) => {
  const { random, setRandom } = useContext(StoreContext);

  const handleSpin = () => {
    setRandom(Math.random());
  };

  const handleReset = () => {
    setRandom(null);
  };

  return (
    <StyledButton
      className={rest.className}
      onClick={random ? handleReset : handleSpin}
    >
      {text}
    </StyledButton>
  );
};

export default SpinButton;
