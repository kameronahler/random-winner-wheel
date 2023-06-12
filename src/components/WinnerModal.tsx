import Confetti from 'react-confetti';
import styled from 'styled-components';
import { StyledImg, StyledName } from './Slice';
import SpinButton from './SpinButton';

const StyledBackdrop = styled.section`
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
  gap: 1rem;
  height: 100%;
  width: 100%;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: clamp(2rem, 4vmin, 4rem);
  text-align: center;
`;

const RestyledWinningImg = styled(StyledImg)`
  position: static;
  margin: unset;
`;
const RestyledWinningName = styled(StyledName)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 3rem;
  rotate: unset;
`;

const RestyledWinningButton = styled(SpinButton)`
  left: unset;
  position: static;
  top: unset;
  translate: unset;
`;

const WinnerModal = ({ name, src }: Person) => {
  return (
    <StyledBackdrop aria-label={`The winner is ${name}`}>
      <StyledInner>
        <StyledH1 aria-hidden>Winner, winner, chicken dinner</StyledH1>
        <RestyledWinningImg aria-hidden $src={src} />
        <RestyledWinningName aria-hidden>{name}</RestyledWinningName>
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
