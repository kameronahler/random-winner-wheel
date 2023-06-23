import { LiaPlusSolid, LiaTrashSolid } from 'react-icons/lia';
import styled, { css } from 'styled-components';
import { StyledFormWrapper } from './StyledPersonsFormContainer';

const StyledButton = styled.button`
  background-color: unset;
  border-radius: var(--border-radius);
  border: none;
  color: ${(props) => props.theme.accentSecondary};
  cursor: pointer;
  display: grid;
  font-size: inherit;
  font-weight: 800;
  height: 100%;
  place-content: center;
  text-align: center;
  width: 100%;
`;

const StyledPersonsListItem = styled.li<{ $src?: Src }>`
  --border-radius: 0.625rem;
  aspect-ratio: 1;
  border-radius: var(--border-radius);
  opacity: 0.5;
  transition: ease 0.5s opacity;
  width: 6vmin;

  ${StyledFormWrapper}:is(:hover, :focus-within) & {
    opacity: 1;
  }

  ${({ $src }) =>
    $src
      ? css`
          background-image: url(${$src});
          background-repeat: no-repeat;
          background-size: cover;
        `
      : css`
          border: ${(props) => props.theme.accentSecondary} 0.3vmin dashed;

          &:hover ${StyledButton} {
            opacity: 0.5;
          }
        `}
`;

const StyledDeleteButton = styled(StyledButton)`
  transition: ease 0.2s;
  transition-property: scale;
  scale: 0;

  li:is(:hover, :focus-visible) & {
    background-color: ${(props) => props.theme.surfaceDarkest};
    outline: ${(props) => props.theme.accentSecondary} 0.3vmin dashed;
    outline-offset: -0.3vmin;
    scale: 1;
  }
`;

const PersonsListItem = ({
  handleAdd,
  handleRemove,
  person,
}: PersonsListItemProps) => {
  const { name, src } = person ?? {};

  return (
    <>
      {handleRemove && (
        <StyledPersonsListItem $src={src}>
          <StyledDeleteButton
            aria-label={`Remove ${name}`}
            onClick={handleRemove}
            type="button"
          >
            <LiaTrashSolid size={16} />
          </StyledDeleteButton>
        </StyledPersonsListItem>
      )}
      {handleAdd && (
        <StyledPersonsListItem>
          <StyledButton
            aria-label={`Add a person`}
            onClick={handleAdd}
            type="button"
          >
            <LiaPlusSolid size={20} />
          </StyledButton>
        </StyledPersonsListItem>
      )}
    </>
  );
};

export default PersonsListItem;
