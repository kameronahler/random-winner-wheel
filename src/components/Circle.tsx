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

const StyledCircle = styled.div<{ $degrees: RandomOrNull }>`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.circleBgColor};
  border-radius: 50%;
  box-shadow: inset ${(props) => props.theme.boxShadow};
  margin: auto;
  outline: ${(props) => props.theme.circleBorderWidth} solid
    ${(props) => props.theme.circleBorderColor};
  outline-offset: calc(-${(props) => props.theme.circleBorderWidth} / 2);
  width: 100%;
  will-change: rotate;

  ${({ $degrees }) =>
    $degrees
      ? css`
          rotate: ${$degrees}deg;
          transition: ${SPIN_DURATION}ms rotate cubic-bezier(0.33, 0, 0, 1);
        `
      : css`
          rotate: 0deg;
          transition: none;
        `}
`;

const Circle = () => {
  const { degrees, floors, random } = useContext(StoreContext);

  return (
    <StyledWrapper>
      <StyledCircle $degrees={degrees}>
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
