import { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MANDATORY_SPINS, SPIN_DURATION } from '../constants';
import { StoreContext } from '../contexts/Store';

const BobAnimation = keyframes`
    100% {
      translate: 0 50%;
    }
  `;

interface StyledArrowProps {
  $isAnimating: boolean;
}

const StyledArrow = styled.div<StyledArrowProps>`
  border-left: 2vmin solid transparent;
  border-right: 2vmin solid transparent;
  border-top: 4vmin solid ${(props) => props.theme.arrowBgColor};
  height: 0;
  margin-bottom: 2rem;
  margin-inline: auto;
  width: 0;
  animation: ${BobAnimation} ${SPIN_DURATION / 40}ms linear forwards alternate;
  animation-iteration-count: ${MANDATORY_SPINS * 4 + 1};
  animation-play-state: ${({ $isAnimating }) =>
    $isAnimating ? 'running' : 'paused'};
`;

const Arrow = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { random } = useContext(StoreContext);

  useEffect(() => {
    setIsAnimating(!!random);
  }, [random]);

  return <StyledArrow key={random} $isAnimating={isAnimating} />;
};

export default Arrow;
