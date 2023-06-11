type Degrees = number;
type DegreesOrNull = Degrees | null;
type Floor = number;
type Floors = Floor[];
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type Index = number;
type IndexOrNull = Index | null;
type IsSpinning = boolean;
type IsSpinningOrNull = IsSpinning | null;
type Name = string;
type Person = {
  name: Name;
  src: Src;
};
type Persons = Person[];
type Random = number;
type RandomOrNull = Random | null;
type Src = string;

interface SliceProps {
  floorsCount: number;
  index: Index;
  name: Name;
  src: Src;
}

interface Store {
  degrees: DegreesOrNull;
  floors: Floors;
  index: IndexOrNull;
  isSpinning: IsSpinningOrNull;
  random: RandomOrNull;
  setRandom: React.Dispatch<RandomOrNull>;
  setIndex: React.Dispatch<IndexOrNull>;
  setIsSpinning: React.Dispatch<IsSpinningOrNull>;
}

interface StoreProvider {
  children: React.ReactNode;
}
