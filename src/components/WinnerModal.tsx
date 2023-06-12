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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
`;

const StyledH1 = styled.h1`
  font-size: clamp(2rem, 4vmin, 4rem);
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

const StyledWinningImg = styled(StyledImg)`
  position: static;
  margin: unset;
`;
const StyledWinningName = styled(StyledName)`
  color: ${(props) => props.theme.textColor};
  rotate: unset;
  margin-bottom: 3rem;
`;

const StyledWinningButton = styled(SpinButton)`
  position: static;
`;

const WinnerModal = ({ name, src }: Person) => {
  return (
    <StyledBackdrop aria-label={`The winner is ${name}`}>
      <StyledInner>
        <StyledH1 aria-hidden>Winner, winner, chicken dinner</StyledH1>
        <StyledWinningImg aria-hidden $src={src} />
        <StyledWinningName aria-hidden>{name}</StyledWinningName>
        <StyledWinningButton text="Reset" />
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
