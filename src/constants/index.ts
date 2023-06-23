import * as Yup from 'yup';
import jerry from '../assets/j.jpeg';
import kristina from '../assets/k.jpeg';
import miles from '../assets/m.jpeg';
import nikki from '../assets/n.jpeg';
import sidd from '../assets/s.jpeg';
import tj from '../assets/t.jpeg';

export const DELAY_WINNER_MODAL = 250;
export const FIELDS = {
  NAME: 'newName',
  PERSONS: 'persons',
  SRC: 'newSrc',
} as const;
export const INITIAL_FORMIK_VALUES: Omit<PersonsFormikValues, 'persons'> = {
  [FIELDS.NAME]: '',
  [FIELDS.SRC]: '',
};
export const INITIAL_PERSONS = [
  {
    name: 'Jerry',
    src: jerry,
  },
  {
    name: 'Kristina',
    src: kristina,
  },
  {
    name: 'Miles',
    src: miles,
  },
  {
    name: 'Nikki',
    src: nikki,
  },
  {
    name: 'Sidd',
    src: sidd,
  },
  {
    name: 'TJ',
    src: tj,
  },
];
export const FORMIK_VALIDATION_SCHEMA = Yup.object({
  [FIELDS.NAME]: Yup.string().required('Name is required'),
  [FIELDS.SRC]: Yup.string()
    .matches(
      /((https?):\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[^\s]*)?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+(&[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+)*)?$/,
      'Enter a valid image URL'
    )
    .required('Image URL is required'),
});
export const MANDATORY_SPINS = 8;
export const MANDATORY_SPINNING_DEGREES = MANDATORY_SPINS * 360;
export const MINIMUM_PERSONS = 2;
export const LOCAL_KEY = 'randomWinnerWheel';
export const SPIN_DURATION = 6000;
export const BUTTON_VARIANTS = {
  FILLED: 'filled',
  OUTLINE: 'outline',
} as const;
