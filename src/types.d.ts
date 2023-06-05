type IsSpinning = boolean;
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type Index = number;
type Random = number;
type Name = string;
type Src = string;
type Floor = number;
type Floors = Floor[];
type Person = {
  name: Name;
  src: Src;
};
type Persons = Person[];

interface PersonProps {
  floors: Floors;
  index: Index;
  name: Name;
  src: Src;
}

interface ButtonProps {
  random: Random | null;
  setRandom: React.Dispatch<React.SetStateAction<number | null>>;
}

interface CircleProps {
  persons: Persons;
  random: Random | null;
}

interface UseRandomWinner {
  floors: Floors;
  random: Random | null;
}
