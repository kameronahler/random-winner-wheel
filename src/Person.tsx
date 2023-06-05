import styled, { css } from 'styled-components';

const StyledImgWrapper = styled.div<{ $angle: number | undefined }>`
  inset: 0;
  position: absolute;

  ${({ $angle }) =>
    $angle &&
    css`
      rotate: ${360 * (1 - $angle)}deg;
    `};
`;

const StyledImg = styled.img`
  aspect-ratio: 1;
  border-radius: 50%;
  display: block;
  height: 100px;
  left: 50%;
  margin-top: 0.5rem;
  position: absolute;
  translate: -50% 0;
`;

const Person = ({ floors, index, name, src }: PersonProps) => {
  const angle = floors?.at(-1 * (index + 1));

  return (
    <StyledImgWrapper $angle={angle} key={name}>
      <StyledImg alt={name} src={`${src}?text=${angle}`} />
    </StyledImgWrapper>
  );
};

export default Person;
