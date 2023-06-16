import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../contexts/Store';

const StyledArrow = styled(motion.div)`
  border-left: 2vmin solid transparent;
  border-right: 2vmin solid transparent;
  border-top: 4vmin solid ${(props) => props.theme.arrowBgColor};
  height: 0;
  margin-bottom: 2rem;
  margin-inline: auto;
  width: 0;
`;

const Arrow = () => {
  const { random } = useContext(StoreContext);

  return (
    <StyledArrow
      key="Arrow"
      initial={{ opacity: 0, y: 0 }}
      animate={
        random !== null
          ? {
              opacity: 1,
              y: '50%',
              transition: { duration: 2 },
            }
          : {}
      }
    />
  );
};

export default Arrow;
