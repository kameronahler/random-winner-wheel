import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { SPIN_DURATION } from '../../constants';
import { WheelContext } from '../../contexts/WheelProvider';

const StyledDiv = styled(motion.div)`
  border-left: 2vmin solid transparent;
  border-right: 2vmin solid transparent;
  border-top: 4vmin solid ${(props) => props.theme.arrowBgColor};
  height: 0;
  margin-bottom: 4vmin;
  margin-inline: auto;
  width: 0;
`;

const WheelArrow = () => {
  const { isStarted } = useContext(WheelContext);

  return (
    <StyledDiv
      key="Arrow"
      initial={{
        opacity: 0,
      }}
      animate={
        isStarted
          ? {
              opacity: 1,
              transition: { duration: SPIN_DURATION / 1000 },
              y: '75%',
            }
          : {}
      }
    />
  );
};

export default WheelArrow;
