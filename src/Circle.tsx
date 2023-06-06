import styled from 'styled-components';
import Person from './Person';
import { SPIN_DURATION } from './constants';
import { getFloors } from './helpers';
import useRandomWinner from './useRandomWinner';

const StyledCircle = styled.div`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.circleBgColor};
  border-radius: 50%;
  height: 100%;
  margin: auto;
  outline-offset: -0.25rem;
  transition: ${SPIN_DURATION}ms rotate cubic-bezier(0.33, 0, 0, 1);
`;

const Circle = ({ persons, random }: CircleProps) => {
  const floors = getFloors(persons);
  const { winningAngle = '0' } = useRandomWinner({ floors, random });

  return (
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
  );
};

export default Circle;
