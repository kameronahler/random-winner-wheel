type IsSpinning = boolean;
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type Index = number;
type Random = number;
type RandomOrNull = Random | null;
type Name = string;
type Src = string;
type Floor = number;
type Floors = Floor[];
type Person = {
  name: Name;
  src: Src;
};
type Persons = Person[];

interface SliceProps {
  floors: Floors;
  index: Index;
  name: Name;
  src: Src;
}

interface UseRandomToAngle {
  floors: Floors;
  random: RandomOrNull;
}

interface Store {
  random: RandomOrNull;
  setRandom: React.Dispatch<RandomOrNull>;
}
