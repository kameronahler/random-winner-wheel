import { Formik } from 'formik';
import { useMemo } from 'react';
import { FORMIK_VALIDATION_SCHEMA, INITIAL_FORMIK_VALUES } from '../constants';
import { getLocalStoragePersons, getUpdatedFormikValues } from '../helpers';

const PersonsFormikProvider = ({ children }: PersonsFormikProviderProps) => {
  const initialPersons = useMemo(() => getLocalStoragePersons(), []);

  return (
    <Formik
      initialValues={{ ...INITIAL_FORMIK_VALUES, persons: initialPersons }}
      onSubmit={(values, { resetForm }) => {
        const newValues = getUpdatedFormikValues(values);
        resetForm({ values: newValues });
      }}
      validationSchema={FORMIK_VALIDATION_SCHEMA}
    >
      {children}
    </Formik>
  );
};

export default PersonsFormikProvider;
