import { Form } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import PersonsFormInner from './PersonsFormInner';
import PersonsList from './PersonsList';
import { StyledFormWrapper } from './StyledPersonsFormContainer';

const PersonsForm = () => {
  const firstInputRef = useRef<null | HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Form noValidate>
      <StyledFormWrapper>
        <PersonsList setIsEditMode={setIsEditMode} />
        <AnimatePresence>
          {isEditMode && (
            <PersonsFormInner
              firstInputRef={firstInputRef}
              setIsEditMode={setIsEditMode}
            />
          )}
        </AnimatePresence>
      </StyledFormWrapper>
    </Form>
  );
};

export default PersonsForm;
