import styled from 'styled-components';
import Person from './Person';
import { SPIN_DURATION } from './constants';
import { getFloors } from './helpers';
import useRandomWinner from './useRandomWinner';

const StyledWrapper = styled.section`
  height: 100vmin;
  position: relative;

  &::after {
    aspect-ratio: 1;
    border-radius: 50%;
    content: '';
    display: block;
    height: calc(100% - 200px - 2rem);
    left: calc(100px + 1rem);
    position: absolute;
    outline: 0.25rem gray solid;
    top: calc(100px + 1rem);
  }
`;

const StyledCircle = styled.div`
  aspect-ratio: 1;

  border-radius: 50%;
  height: 100%;
  margin: auto;
  outline: 0.25rem gray solid;
  outline-offset: -0.25rem;
  transition: ${SPIN_DURATION}ms rotate cubic-bezier(0.33, 0, 0, 1);
`;

const Circle = ({ persons, random }: CircleProps) => {
  const floors = getFloors(persons);
  const { winningAngle = '0' } = useRandomWinner({ floors, random });

  return (
    <StyledWrapper aria-labelledby="header">
      <StyledCircle style={{ rotate: `${winningAngle}deg` }}>
        {persons.map(({ name, src }, index) => (
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
