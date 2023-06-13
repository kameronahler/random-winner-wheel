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
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2vmin;
  left: 50%;
  position: absolute;
  translate: -50% 0;
`;

export const StyledImg = styled.div<{ $src: Src }>`
  aspect-ratio: 1;
  background-image: url('${({ $src }) => $src}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: grid;
  margin-top: ${(props) => props.theme.outerCircleWidth};
  width: 10vmin;
`;

export const StyledName = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: clamp(0.75rem, 2vmin, 3rem);
  font-weight: 650;
  margin: unset;
  max-height: 20vmin;
  overflow: hidden;
  text-orientation: mixed;
  text-overflow: ellipsis;
  white-space: nowrap;
  writing-mode: vertical-lr;
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
