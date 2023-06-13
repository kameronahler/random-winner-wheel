import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import { StyledImg, StyledName } from './Slice';
import SpinButton from './SpinButton';

const StyledBackdrop = styled(motion.section)`
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  height: 100%;
  place-content: center;
  width: 100%;
`;

const StyledInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  width: 100%;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: clamp(3rem, 5vmin, 4rem);
  margin: unset;
  text-align: center;
`;

const RestyledWinningImg = styled(StyledImg)`
  position: static;
  margin: 0 0 1.5rem;
  width: 8rem;
`;

const RestyledWinningName = styled(StyledName)`
  color: ${(props) => props.theme.textColor};
  max-height: unset;
  overflow: unset;
  rotate: unset;
  text-align: center;
  text-orientation: unset;
  text-overflow: unset;
  white-space: unset;
  writing-mode: unset;
`;

const RestyledWinningButton = styled(SpinButton)`
  left: unset;
  position: static;
  top: unset;
  translate: unset;
`;

const BACKDROP_MOTION_VARIANTS = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const CHILDREN_MOTION_CONFIG = {
  initial: {
    opacity: 0,
    y: '2rem',
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const WinnerModal = ({ name, src }: Person) => {
  return (
    <StyledBackdrop
      animate="visible"
      aria-label={`The winner is ${name}`}
      exit="hidden"
      initial="hidden"
      variants={BACKDROP_MOTION_VARIANTS}
    >
      <StyledInner>
        <motion.div
          initial={CHILDREN_MOTION_CONFIG.initial}
          animate={{
            ...CHILDREN_MOTION_CONFIG.animate,
            transition: { duration: 0.75, delay: 0.5 },
          }}
          exit={CHILDREN_MOTION_CONFIG.initial}
          key="winner-modal-h1"
        >
          <StyledH1 aria-hidden>Winner, winner, chicken dinner</StyledH1>
        </motion.div>
        <div>
          <motion.div
            key="winner-modal-img"
            initial={CHILDREN_MOTION_CONFIG.initial}
            animate={{
              ...CHILDREN_MOTION_CONFIG.animate,
              transition: { duration: 0.75, delay: 1.25 },
            }}
            exit={CHILDREN_MOTION_CONFIG.initial}
          >
            <RestyledWinningImg aria-hidden $src={src} />
          </motion.div>
          <motion.div
            key="winner-modal-name"
            initial={CHILDREN_MOTION_CONFIG.initial}
            animate={{
              ...CHILDREN_MOTION_CONFIG.animate,
              transition: { duration: 0.75, delay: 1.625 },
            }}
            exit={CHILDREN_MOTION_CONFIG.initial}
          >
            <RestyledWinningName aria-hidden>{name}</RestyledWinningName>
          </motion.div>
        </div>
        <RestyledWinningButton text="Reset" />
      </StyledInner>
      <Confetti
        gravity={0.025}
        height={window.innerHeight}
        numberOfPieces={100}
        width={window.innerWidth}
      />
    </StyledBackdrop>
  );
};

export default WinnerModal;
