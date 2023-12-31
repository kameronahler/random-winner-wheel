import { useFormikContext } from 'formik';
import { motion, useReducedMotion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { SPIN_DURATION } from '../../constants';
import { WheelContext } from '../../contexts/WheelProvider';
import SpinButton from '../spinButton/SpinButton';
import WheelSlice from './WheelSlice';

const StyledWrapper = styled.section`
  border-radius: 50%;
  border: ${(props) => props.theme.outerCircleWidth} solid
    ${(props) => props.theme.circleBorderColor};
  margin-inline: auto;
  max-width: 80vmin;
  position: relative;
  width: 100%;
`;

const StyledCircle = styled(motion.div)`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.circleBgColor};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  border-radius: 50%;
  box-shadow: inset ${(props) => props.theme.boxShadowLarge};
  margin: auto;
  width: 100%;
`;

const WheelCircle = () => {
  const { degrees, floors, isStarted, setIsDone } = useContext(WheelContext);
  const {
    values: { persons },
  } = useFormikContext<PersonsFormikValues>();

  const isPrefersReducedMotion = useReducedMotion();

  const handleOnAnimationComplete = () => {
    if (isStarted) setIsDone(true);
  };

  return (
    <StyledWrapper>
      <StyledCircle
        animate={
          degrees
            ? {
                rotate: degrees,
                transition: {
                  duration: isPrefersReducedMotion ? 0 : SPIN_DURATION / 1000,
                  ease: [0.33, 0, 0, 1],
                },
              }
            : {}
        }
        onAnimationComplete={handleOnAnimationComplete}
      >
        {persons.map(({ name, src }, index) => (
          <WheelSlice
            floorsCount={floors.length}
            index={index}
            key={name + index}
            name={name}
            src={src}
          />
        ))}
      </StyledCircle>
      <SpinButton text={isStarted ? 'Stop' : 'Spin'} />
    </StyledWrapper>
  );
};

export default WheelCircle;
