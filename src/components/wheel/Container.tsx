import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { STUB } from '../../constants';
import { GrossContext } from '../../contexts/Context';
import WinnerModal from '../winnerModal/WinnerModal';
import Arrow from './Arrow';
import Circle from './Circle';

const INITIAL_DATA = {
  name: '',
  src: '',
};

const Container = () => {
  const { index, isDone } = useContext(GrossContext);
  const { name, src } = index !== null ? STUB[index] : INITIAL_DATA;

  return (
    <>
      {isDone ? (
        <AnimatePresence>
          <WinnerModal key="winner-modal" name={name} src={src} />
        </AnimatePresence>
      ) : (
        <>
          <Arrow />
          <Circle />
        </>
      )}
    </>
  );
};

export default Container;
