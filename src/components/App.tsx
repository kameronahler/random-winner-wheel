import { useFormikContext } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { MINIMUM_PERSONS } from '../constants';
import { WheelContext } from '../contexts/WheelProvider';
import PersonsForm from './personsForm/PersonsForm';
import WheelContainer from './wheel/WheelContainer';
import WinnerModal from './winnerModal/WinnerModal';

const StyledFormContainer = styled(motion.div)`
  width: 100%;
`;

const StyledWheelContainer = styled(motion.div)`
  height: 100%;
  overflow: hidden;
`;

const App = () => {
  const { index, isDone, isStarted } = useContext(WheelContext);
  const {
    values: { persons },
  } = useFormikContext<PersonsFormikValues>();
  const hasMinimumPersons = persons.length >= MINIMUM_PERSONS;

  return (
    <AnimatePresence>
      <StyledFormContainer
        key="form-container-motion"
        initial={{ opacity: 1, height: 'auto' }}
        animate={isStarted ? { opacity: 0, height: 0 } : {}}
      >
        <PersonsForm />
      </StyledFormContainer>

      {hasMinimumPersons && !isDone && (
        <StyledWheelContainer>
          <WheelContainer />
        </StyledWheelContainer>
      )}

      {hasMinimumPersons && isDone && (
        <WinnerModal
          key="winner-modal"
          name={persons[index ?? 0].name}
          src={persons[index ?? 0].src}
        />
      )}
    </AnimatePresence>
  );
};

export default App;
