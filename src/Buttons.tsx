import styled from 'styled-components';

const StyledButton = styled.button`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.buttonBgColor};
  border: unset;
  border-radius: 50%;
  display: block;
  height: 15vmin;
  inset: 0;
  margin: auto;
  position: absolute;
  padding: unset;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: clamp(1rem, 3vmin, 3rem);
  font-weight: 700;
`;
const Buttons = ({ random, setRandom }: ButtonProps) => {
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

export default Buttons;
