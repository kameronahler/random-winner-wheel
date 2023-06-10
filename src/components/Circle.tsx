import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { SPIN_DURATION, STUB } from '../constants';
import { StoreContext } from '../contexts/Context';
import { getFloors } from '../helpers';
import useRandomToAngle from '../hooks/useRandomToAngle';
import Slice from './Slice';
import SpinButton from './SpinButton';

const StyledWrapper = styled.section`
  border-radius: 50%;
  margin-inline: auto;
  position: relative;
  width: 100%;
  max-width: 90vmin;
`;

const StyledCircle = styled.div<{ $angle: RandomOrNull }>`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.circleBgColor};
  border-radius: 50%;
  height: 100%;
  margin: auto;

  ${({ $angle }) =>
    $angle
      ? css`
          rotate: ${$angle}deg;
          transition: ${SPIN_DURATION}ms rotate cubic-bezier(0.33, 0, 0, 1);
        `
      : css`
          rotate: 0deg;
          transition: none;
        `}

  outline: .5vmin solid ${(props) => props.theme.circleBorderColor};
  outline-offset: -0.5vmin;
`;

const Circle = () => {
  const floors = getFloors(STUB);
  const { random } = useContext(StoreContext);
  const { angle } = useRandomToAngle({ floors, random });

  return (
    <StyledWrapper>
      <StyledCircle $angle={angle}>
        {STUB.map(({ name, src }, index) => (
          <Slice
            floors={floors}
            src={src}
            index={index}
            name={name}
            key={name + index}
          />
        ))}
      </StyledCircle>
      <SpinButton />
    </StyledWrapper>
  );
};

export default Circle;
