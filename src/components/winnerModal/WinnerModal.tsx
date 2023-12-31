import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import SpinButton from '../spinButton/SpinButton';
import { StyledImg, StyledName } from '../wheel/WheelSlice';

const StyledBackdrop = styled(motion.section)`
  background-color: ${(props) => props.theme.surfaceDarker};
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
  color: ${(props) => props.theme.textLight};
  font-size: clamp(3rem, 5vmin, 4rem);
  margin: unset;
  text-align: center;
`;

const RestyledWinningImg = styled(StyledImg)`
  position: static;
  margin: 0 auto 1.5rem;
  width: 8rem;
`;

const RestyledWinningName = styled(StyledName)`
  color: ${(props) => props.theme.textLight};
  font-size: clamp(2rem, 4vmin, 3rem);
  max-height: unset;
  overflow: unset;
  rotate: unset;
  text-align: center;
  text-orientation: unset;
  text-overflow: unset;
  white-space: unset;
  writing-mode: unset;
`;

const RestyledSpinButton = styled(SpinButton)`
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
  const isPrefersReducedMotion = useReducedMotion();
  const [isModalAnimationDone, setIsModalAnimationDone] = useState(false);

  const handleAnimationComplete = () => setIsModalAnimationDone(true);

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
          initial={
            isPrefersReducedMotion ? undefined : CHILDREN_MOTION_CONFIG.initial
          }
          animate={
            isPrefersReducedMotion
              ? undefined
              : {
                  ...CHILDREN_MOTION_CONFIG.animate,
                  transition: { duration: 0.75, delay: 0.5 },
                }
          }
          exit={
            isPrefersReducedMotion ? undefined : CHILDREN_MOTION_CONFIG.initial
          }
          key="winner-modal-h1"
        >
          <StyledH1 aria-hidden>Winner, winner, chicken dinner</StyledH1>
        </motion.div>
        <div>
          <motion.div
            key="winner-modal-img"
            initial={
              isPrefersReducedMotion
                ? undefined
                : CHILDREN_MOTION_CONFIG.initial
            }
            animate={
              isPrefersReducedMotion
                ? undefined
                : {
                    ...CHILDREN_MOTION_CONFIG.animate,
                    transition: { duration: 0.75, delay: 1 },
                  }
            }
            exit={
              isPrefersReducedMotion
                ? undefined
                : CHILDREN_MOTION_CONFIG.initial
            }
          >
            <RestyledWinningImg aria-hidden $src={src} />
          </motion.div>
          <motion.div
            key="winner-modal-name"
            initial={
              isPrefersReducedMotion
                ? undefined
                : CHILDREN_MOTION_CONFIG.initial
            }
            animate={
              isPrefersReducedMotion
                ? undefined
                : {
                    ...CHILDREN_MOTION_CONFIG.animate,
                    transition: { duration: 0.75, delay: 1.5 },
                  }
            }
            exit={
              isPrefersReducedMotion
                ? undefined
                : CHILDREN_MOTION_CONFIG.initial
            }
          >
            <RestyledWinningName aria-hidden>{name}</RestyledWinningName>
          </motion.div>
        </div>
        <motion.div
          key="winner-modal-button"
          initial={
            isPrefersReducedMotion ? undefined : CHILDREN_MOTION_CONFIG.initial
          }
          animate={
            isPrefersReducedMotion
              ? undefined
              : {
                  ...CHILDREN_MOTION_CONFIG.animate,
                  transition: { duration: 0.75, delay: 2 },
                }
          }
          exit={
            isPrefersReducedMotion ? undefined : CHILDREN_MOTION_CONFIG.initial
          }
          onAnimationComplete={handleAnimationComplete}
        >
          <RestyledSpinButton
            disabled={!isPrefersReducedMotion && !isModalAnimationDone}
            text="Reset"
          />
        </motion.div>
      </StyledInner>
      {!isPrefersReducedMotion && (
        <Confetti
          gravity={0.025}
          height={window.innerHeight}
          numberOfPieces={100}
          width={window.innerWidth}
        />
      )}
    </StyledBackdrop>
  );
};

export default WinnerModal;
