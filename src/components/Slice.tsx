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

  &::after {
    background-color: ${(props) => props.theme.circleBorderColor};
    border-radius: 999em;
    content: '';
    display: block;
    height: 50%;
    left: 50%;
    position: absolute;
    translate: -50% 0;
    width: 0.5vmin;
  }

  ${({ $floorsCount }) =>
    $floorsCount % 2 === 0
      ? css`
          &::after {
            rotate: ${-360 / ($floorsCount * 2)}deg;
            top: 0;
            transform-origin: 50% 100%;
          }
        `
      : css`
          &::after {
            top: 50%;
            transform-origin: 50% 50%;
          }
        `}
`;

const StyledInner = styled.div`
  left: 50%;
  position: absolute;
  translate: -50% 0;
`;

const StyledImg = styled.div`
  aspect-ratio: 1;
  background-color: gray;
  border-radius: 50%;
  display: grid;
  height: 15vmin;
  margin-top: 0.5vmin;
  place-content: center;
`;

const StyledName = styled.p`
  color: ${(props) => props.theme.nameColor};
  font-size: clamp(1rem, 3vmin, 3rem);
  text-align: center;
`;

const Slice = ({ floors, index, name, src }: SliceProps) => {
  const floorsCount = floors.length;

  return (
    <StyledWrapper
      $borderRotation={((360 / floorsCount) * index) / 2}
      $wrapperRotation={(360 / floorsCount) * index}
      $floorsCount={floorsCount}
    >
      <StyledInner>
        <StyledImg data-src={src} />
        <StyledName>{name}</StyledName>
      </StyledInner>
    </StyledWrapper>
  );
};

export default Slice;
