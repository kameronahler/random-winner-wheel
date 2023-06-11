import styled, { css } from 'styled-components';

interface StyledWrapperProps {
  $borderRotation: RandomOrNull;
  $floorsCount: number;
  $wrapperRotation: RandomOrNull;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  inset: 0;
  position: absolute;
  rotate: ${({ $wrapperRotation }) => $wrapperRotation}deg;

  &::after,
  &::before {
    background-color: ${(props) => props.theme.circleBorderColor};
    border-radius: 999em;
    content: '';
    display: block;
    height: 50%;
    position: absolute;
    width: ${(props) => props.theme.circleBorderWidth};
  }

  &::after {
    left: 50%;
    translate: -50% 0;
  }

  &::before {
    background-image: linear-gradient(
      ${(props) => props.theme.outerPegColor} 0%,
      ${(props) => props.theme.outerPegColor} 2.5%,
      transparent 2.5%,
      transparent 100%
    );
    left: 50%;
    scale: 1.025;
    translate: -50% 0;
    width: ${(props) => props.theme.circleBorderWidth};
  }

  ${({ $floorsCount }) =>
    $floorsCount % 2 === 0
      ? css`
          &::after,
          &::before {
            rotate: ${-360 / ($floorsCount * 2)}deg;
            top: 0;
            transform-origin: 50% 100%;
          }
        `
      : css`
          &::after,
          &::before {
            top: 50%;
            transform-origin: 50% 50%;
          }

          &::before {
            rotate: ${-360 / ($floorsCount * 2)}deg;
            top: 0;
            transform-origin: 50% 100%;
          }
        `}
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vmin;
  left: 50%;
  position: absolute;
  translate: -50% 0;
`;

const StyledImg = styled.div<{ $src: Src }>`
  aspect-ratio: 1;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: grid;
  width: 10vmin;
  margin-block: ${(props) => props.theme.outerCircleWidth};
`;

const StyledName = styled.p`
  color: ${(props) => props.theme.nameColor};
  font-size: clamp(1rem, 3vmin, 3rem);
  margin: unset;
  rotate: 90deg;
`;

const Slice = ({ floorsCount, index, name, src }: SliceProps) => {
  return (
    <StyledWrapper
      $borderRotation={((360 / floorsCount) * index) / 2}
      $wrapperRotation={(360 / floorsCount) * index}
      $floorsCount={floorsCount}
    >
      <StyledInner>
        <StyledImg $src={src} />
        <StyledName>{name}</StyledName>
      </StyledInner>
    </StyledWrapper>
  );
};

export default Slice;
