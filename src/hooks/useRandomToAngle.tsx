import { useEffect, useState } from 'react';
import { getAngle } from '../helpers';

const useRandomToAngle = ({ floors, random }: UseRandomToAngle) => {
  const [angle, setAngle] = useState<RandomOrNull>(null);

  useEffect(() => {
    if (random && floors) {
      setAngle(getAngle(floors, random));
    } else {
      setAngle(0);
    }
  }, [floors, random]);
  return {
    angle,
  };
};

export default useRandomToAngle;
