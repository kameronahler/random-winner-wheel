import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../contexts/Store';
import { getAngle } from '../helpers';

const useRandomToAngle = () => {
  const { floors, random } = useContext(StoreContext);
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
