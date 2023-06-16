type Degrees = number;
type DegreesOrNull = Degrees | null;
type Floor = number;
type Floors = Floor[];
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type HasSpun = boolean;
type Index = number;
type IndexOrNull = Index | null;
type IsDone = boolean;
type IsStarted = boolean;
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

interface GrossContextData {
  degrees: DegreesOrNull;
  floors: Floors;
  index: IndexOrNull;
  isDone: IsDone;
  isStarted: IsStarted;
  random: RandomOrNull;
  setDegrees: React.Dispatch<DegreesOrNull>;
  setIndex: React.Dispatch<IndexOrNull>;
  setIsDone: React.Dispatch<IsDone>;
  setIsStarted: React.Dispatch<IsStarted>;
  setRandom: React.Dispatch<RandomOrNull>;
}

interface ContainerProps {
  children: React.ReactNode;
}

interface GrossContextProvider {
  children: React.ReactNode;
}

interface SpinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
