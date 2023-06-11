import { useContext } from 'react';
import { STUB } from '../constants';
import { StoreContext } from '../contexts/Store';
import Arrow from './Arrow';
import Circle from './Circle';
import WinnerModal from './WinnerModal';

const INITIAL_DATA = {
  name: '',
  src: '',
};

const Container = () => {
  const { index, isDoneSpinning } = useContext(StoreContext);
  const { name, src } = index ? STUB[index] : INITIAL_DATA;

  return index && isDoneSpinning ? (
    <WinnerModal name={name} src={src} />
  ) : (
    <>
      <Arrow />
      <Circle />
    </>
  );
};

export default Container;
