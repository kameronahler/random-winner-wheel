import { useEffect, useState } from 'react';
import { getAngle } from '../helpers';

const useRandomAngle = ({ floors, random }: UseRandomWinner) => {
  const [winningAngle, setWinningDeg] = useState<RandomOrNull>(null);

  useEffect(() => {
    if (random && floors) {
      setWinningDeg(getAngle(floors, random));
    }
  }, [floors, random]);
  return {
    winningAngle,
  };
};

export default useRandomAngle;
