import { useReducedMotion } from 'framer-motion';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { GrossContext } from '../../contexts/Context';

interface StyledButtonProps {
  $isPrefersReducedMotion: $IsPrefersReducedMotion;
}

const StyledButton = styled.button<StyledButtonProps>`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.spinButtonBgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 50%;
  border: ${(props) => `${props.theme.circleBorderWidth} solid
    ${props.theme.spinButtonBorderColor}`};
  color: ${(props) => props.theme.spinButtonTextColor};
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

  ${({ $isPrefersReducedMotion }) =>
    !$isPrefersReducedMotion &&
    css`
      &:active {
        scale: 0.9;
        transition: scale 0.2s ease;
      }
    `}
`;

const SpinButton = ({ text, ...rest }: SpinButtonProps) => {
  const {
    isStarted,
    setIsDone,
    setDegrees,
    setIndex,
    setIsStarted,
    setRandom,
  } = useContext(GrossContext);

  const isPrefersReducedMotion = useReducedMotion();

  const handleSpin = () => {
    setRandom(Math.random());
    setIsStarted(true);
  };

  const handleReset = () => {
    setDegrees(null);
    setIndex(null);
    setIsDone(false);
    setIsStarted(false);
    setRandom(null);
  };

  return (
    <StyledButton
      className={rest.className}
      onClick={isStarted ? handleReset : handleSpin}
      disabled={rest.disabled}
      $isPrefersReducedMotion={isPrefersReducedMotion}
    >
      {text}
    </StyledButton>
  );
};

export default SpinButton;
