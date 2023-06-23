import { ArrayHelpers, FieldArray, useFormikContext } from 'formik';
import styled from 'styled-components';
import { FIELDS } from '../../constants';
import { setLocalStoragePersonsWithoutIndex } from '../../helpers';
import PersonsListItem from './PersonsListItem';

export const StyledPersonsList = styled.ol`
  display: flex;
  gap: 2rem;
  justify-content: center;
  list-style: none;
  margin: unset;
  padding: unset;
  overflow: auto;
`;

const PersonsList = ({ setIsEditMode }: PersonsListProps) => {
  const {
    values: { persons },
  } = useFormikContext<PersonsFormikValues>();
  const hasPersons = persons.length > 0;

  const handleAdd = () => {
    if (setIsEditMode) setIsEditMode(true);
  };

  return (
    <StyledPersonsList>
      {hasPersons && (
        <FieldArray
          name={FIELDS.PERSONS}
          render={({ remove }: ArrayHelpers) =>
            persons.map((person, index) => {
              const handleRemove = () => {
                remove(index);
                setLocalStoragePersonsWithoutIndex(persons, index);
              };
              return (
                <PersonsListItem
                  handleRemove={handleRemove}
                  key={`${person.name}-${index}`}
                  person={person}
                />
              );
            })
          }
        />
      )}
      <PersonsListItem handleAdd={handleAdd} />
    </StyledPersonsList>
  );
};

export default PersonsList;
