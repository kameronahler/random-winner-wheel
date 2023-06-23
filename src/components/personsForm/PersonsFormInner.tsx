import { useFormikContext } from 'formik';
import { motion } from 'framer-motion';
import { LiaPlusSolid } from 'react-icons/lia';
import styled from 'styled-components';
import { BUTTON_VARIANTS, FIELDS } from '../../constants';
import { setLocalStoragePersons } from '../../helpers';
import Button from '../button/Button';
import FormikField from '../formik/FormikField';

const StyledFieldWrapper = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'field field'
    'add add'
    'done done';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1.25rem 1.5rem;
  overflow: hidden;

  @media (min-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr) auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'field field add'
      'done done done';
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(2, 1fr) auto auto;
    grid-template-areas: 'field field add done';
  }
`;

const StyledAddButton = styled(Button)`
  grid-area: add;

  @media (min-width: 37.5em) {
    margin-top: 1.6875rem;
  }
`;

const StyledDoneButton = styled(Button)`
  grid-area: done;

  @media (min-width: 60em) {
    margin-left: 1.5rem;
    margin-top: 1.6875rem;
  }
`;

const PersonsFormInner = ({
  firstInputRef,
  setIsEditMode,
}: PersonsFormInnerProps) => {
  const { isSubmitting, isValid, handleSubmit, values } =
    useFormikContext<PersonsFormikValues>();

  const handleSubmitLocalFocus = () => {
    /* This is a manual hack, just haven't figured out what the secret sauce is
    for this in Formik. We want the form to start without error messages, but
    that also means it is valid which allows it to be submitted */
    if (isValid && values[FIELDS.NAME] !== '' && values[FIELDS.SRC] !== '') {
      setLocalStoragePersons(values);
      handleSubmit();
      if (firstInputRef.current) firstInputRef.current.focus();
    }
  };

  const handleDone = () => {
    if (setIsEditMode) setIsEditMode(false);
  };

  return (
    <StyledFieldWrapper
      key="form-inner-motion"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    >
      <FormikField
        label="Name"
        name={FIELDS.NAME}
        ref={firstInputRef}
        type="text"
      />

      <FormikField label="Image URL" name={FIELDS.SRC} type="url" />

      <StyledAddButton
        aria-label="Add person"
        onClick={handleSubmitLocalFocus}
        disabled={isSubmitting}
        type="submit"
        variant={BUTTON_VARIANTS.OUTLINE}
      >
        <LiaPlusSolid size={20} />
        &nbsp;Add
      </StyledAddButton>

      <StyledDoneButton
        onClick={handleDone}
        disabled={isSubmitting}
        type="button"
      >
        Done
      </StyledDoneButton>
    </StyledFieldWrapper>
  );
};

export default PersonsFormInner;
