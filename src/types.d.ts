type IsSpinning = boolean;
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type Index = number;
type Random = number;
type RandomOrNull = Random | null;
type Name = string;
type NameOrNull = Name | null;
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

interface Store {
  floors: Floors;
  name: NameOrNull;
  random: RandomOrNull;
  setName: React.Dispatch<NameOrNull>;
  setRandom: React.Dispatch<RandomOrNull>;
}

interface StoreProvider {
  children: React.ReactNode;
}
