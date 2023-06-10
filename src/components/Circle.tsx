import { useContext } from 'react';
import styled from 'styled-components';
import { SPIN_DURATION, STUB } from '../constants';
import { StoreContext } from '../contexts/Context';
import { getFloors } from '../helpers';
import useRandomAngle from '../hooks/useRandomAngle';
import Person from './Person';

const StyledWrapper = styled.section`
  border-radius: 50%;
  margin-inline: auto;
  position: relative;
  width: 100%;
  max-width: 90vmin;
`;

const StyledCircle = styled.div`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.circleBgColor};
  border-radius: 50%;
  height: 100%;
  margin: auto;
  transition: ${SPIN_DURATION}ms rotate cubic-bezier(0.33, 0, 0, 1);
`;

const Circle = () => {
  const { random } = useContext(StoreContext);
  const floors = getFloors(STUB);
  const { winningAngle = '0' } = useRandomAngle({ floors, random });

  return (
    <StyledWrapper>
      <StyledCircle style={{ rotate: `${winningAngle}deg` }}>
        {STUB.map(({ name, src }, index) => (
          <Person
            floors={floors}
            src={src}
            index={index}
            name={name}
            key={name + index}
          />
        ))}
      </StyledCircle>
    </StyledWrapper>
  );
};

export default Circle;
