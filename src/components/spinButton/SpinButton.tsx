import { useReducedMotion } from 'framer-motion';
import { useContext } from 'react';

import styled, { css } from 'styled-components';
import { WheelContext } from '../../contexts/WheelProvider';
import Button from '../button/Button';

interface StyledButtonProps {
  $isPrefersReducedMotion: $IsPrefersReducedMotion;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.boxShadowLarge};
  font-size: clamp(1rem, 3vmin, 3rem);
  height: unset;
  left: 50%;
  padding: 3vmin;
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
  } = useContext(WheelContext);

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
