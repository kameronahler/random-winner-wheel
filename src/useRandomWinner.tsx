import { useEffect, useState } from 'react';
import { getAngle } from './helpers';

const useRandomWinner = ({ floors, random }: UseRandomWinner) => {
  const [winningAngle, setWinningDeg] = useState<null | number>(null);

  useEffect(() => {
    if (random && floors) {
      setWinningDeg(getAngle(floors, random));
    }
  }, [random]);
  return {
    winningAngle,
  };
};

export default useRandomWinner;
