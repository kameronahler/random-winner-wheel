import styled, { css } from 'styled-components';

interface StyledWrapperProps {
  $angle: number | undefined;
  $floorsCount: number;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  inset: 0;
  position: absolute;

  ${({ $angle }) =>
    $angle &&
    css`
      rotate: ${360 * (1 - $angle)}deg;
    `};

  &::after {
    background-color: ${(props) => props.theme.mainBgColor};
    content: '';
    display: block;
    height: 50%;
    left: 50%;
    position: absolute;
    width: 3px;
  }

  ${({ $floorsCount }) =>
    $floorsCount % 2 === 0
      ? css`
          &::after {
            height: 50%;
            top: 50%;
            transform: rotate(${360 / ($floorsCount * 2)}deg);
            transform-origin: 100% 0;
          }
        `
      : css`
          &::after {
            height: 50%;
            top: 50%;
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
  place-content: center;
`;

const StyledName = styled.p`
  color: ${(props) => props.theme.nameColor};
  font-size: clamp(1rem, 3vmin, 3rem);
  text-align: center;
`;

const Slice = ({ floors, index, name, src }: SliceProps) => {
  const angle = floors.at(-1 * (index + 1));

  return (
    <StyledWrapper $angle={angle} $floorsCount={floors.length} key={name}>
      <StyledInner>
        <StyledImg data-src={src} />
        <StyledName>{name}</StyledName>
      </StyledInner>
    </StyledWrapper>
  );
};

export default Slice;
