import styled, { css } from 'styled-components';

const StyledRotationWrapper = styled.div<{ $angle: number | undefined }>`
  inset: 0;
  position: absolute;

  ${({ $angle }) =>
    $angle &&
    css`
      rotate: ${360 * (1 - $angle)}deg;
    `};
`;

const StyledInnerWrapper = styled.div`
  left: 50%;
  position: absolute;
  translate: -50% 0;
`;

const StyledImg = styled.div`
  aspect-ratio: 1;
  background-color: gray;
  border-radius: 50%;
  display: grid;
  height: 20vmin;
  place-content: center;
`;

const StyledName = styled.p`
  color: ${(props) => props.theme.nameColor};
  font-size: clamp(1rem, 3vmin, 3rem);
  text-align: center;
`;

const Person = ({ floors, index, name, src }: PersonProps) => {
  const angle = floors?.at(-1 * (index + 1));

  return (
    <StyledRotationWrapper $angle={angle} key={name}>
      <StyledInnerWrapper>
        <StyledImg data-src={src} />
        <StyledName>{name}</StyledName>
      </StyledInnerWrapper>
    </StyledRotationWrapper>
  );
};

export default Person;
