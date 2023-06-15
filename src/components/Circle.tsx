import { useReducedMotion } from 'framer-motion';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { SPIN_DURATION, STUB } from '../constants';
import { StoreContext } from '../contexts/Store';
import Slice from './Slice';
import SpinButton from './SpinButton';

const StyledWrapper = styled.section`
  border-radius: 50%;
  border: ${(props) => props.theme.outerCircleWidth} solid
    ${(props) => props.theme.circleBorderColor};
  margin-inline: auto;
  position: relative;
  width: 100%;
  max-width: 90vmin;
`;

interface StyledCircleProps {
  $degrees: RandomOrNull;
  $isPrefersReducedMotion?: $IsPrefersReducedMotion;
}

const StyledCircle = styled.div<StyledCircleProps>`
  aspect-ratio: 1;
  background-image: ${(props) =>
    `radial-gradient(${props.theme.circleBgColorOuter}, ${props.theme.circleBgColorInner})`};
  border-radius: 50%;
  box-shadow: inset ${(props) => props.theme.boxShadow};
  margin: auto;
  outline: ${(props) => props.theme.circleBorderWidth} solid
    ${(props) => props.theme.circleBorderColor};
  outline-offset: calc(-${(props) => props.theme.circleBorderWidth} / 2);
  width: 100%;
  will-change: rotate;

  ${({ $degrees, $isPrefersReducedMotion }) =>
    $degrees
      ? css`
          rotate: ${$degrees}deg;
          transition: ${$isPrefersReducedMotion ? 0 : SPIN_DURATION}ms rotate
            cubic-bezier(0.33, 0, 0, 1);
        `
      : css`
          rotate: 0deg;
          transition: none;
        `}
`;

const Circle = () => {
  const { degrees, floors, random } = useContext(StoreContext);
  const isPrefersReducedMotion = useReducedMotion();

  return (
    <StyledWrapper>
      <StyledCircle
        $isPrefersReducedMotion={isPrefersReducedMotion}
        $degrees={degrees}
      >
        {STUB.map(({ name, src }, index) => (
          <Slice
            floorsCount={floors.length}
            index={index}
            key={name + index}
            name={name}
            src={src}
          />
        ))}
      </StyledCircle>
      <SpinButton text={random ? 'Stop' : 'Spin'} />
    </StyledWrapper>
  );
};

export default Circle;
