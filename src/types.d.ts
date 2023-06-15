type Degrees = number;
type DegreesOrNull = Degrees | null;
type Floor = number;
type Floors = Floor[];
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type HasSpun = boolean;
type Index = number;
type IndexOrNull = Index | null;
type IsDoneSpinning = boolean;
type Name = string;
type Person = {
  name: Name;
  src: Src;
};
type Persons = Person[];
type Random = number;
type RandomOrNull = Random | null;
type Src = string;
type $IsPrefersReducedMotion = boolean | null;

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
  hasSpun: HasSpun;
  isDoneSpinning: IsDoneSpinning;
  random: RandomOrNull;
  setRandom: React.Dispatch<RandomOrNull>;
  setIndex: React.Dispatch<IndexOrNull>;
}

interface ContainerProps {
  children: React.ReactNode;
}

interface StoreProvider {
  children: React.ReactNode;
}

interface SpinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
