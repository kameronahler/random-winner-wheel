type Degrees = number;
type DegreesOrNull = Degrees | null;
type FirstInputRef = React.MutableRefObject<HTMLInputElement | null>;
type Floor = number;
type Floors = Floor[];
type HandleSpin = React.MouseEventHandler<HTMLButtonElement>;
type HasSpun = boolean;
type Index = number;
type IndexOrNull = Index | null;
type IsDone = boolean;
type IsStarted = boolean;
type IsEditMode = boolean;
type Name = string;
type Person = {
  name: Name;
  src: Src;
};
type Persons = Person[];
type Random = number;
type RandomOrNull = Random | null;
type SetIsEditMode = React.Dispatch<React.SetStateAction<IsEditMode>>;
type Src = string;
type $IsPrefersReducedMotion = boolean | null;

interface FormikFieldProps {
  label: string;
  name: Name;
  type: HTMLInputElement['type'];
}

interface FormikButtonsProps {
  firstInputRef: FirstInputRef;
  setIsEditMode?: Partial<SetIsEditMode, 'setIsEditMode'>;
}

interface PersonsFormikValues {
  newName: Name;
  newSrc: Src;
  persons: Persons;
}

interface PersonsFormikProviderProps {
  children: React.ReactNode;
}

interface PersonsListProps {
  setIsEditMode?: Partial<SetIsEditMode, 'setIsEditMode'>;
}

interface PersonsFormInnerProps {
  firstInputRef: FirstInputRef;
  setIsEditMode: SetIsEditMode;
}

interface PersonsFormFieldsProps {
  firstInputRef: FirstInputRef;
  setIsEditMode: SetIsEditMode;
}

interface PersonsListItemProps {
  handleRemove?: () => void;
  handleAdd?: () => void;
  person?: Person;
}

interface WheelSliceProps {
  floorsCount: number;
  index: Index;
  name: Name;
  src: Src;
}

interface WheelContextData {
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

interface WheelContainerProps {
  children: React.ReactNode;
}

interface WheelContextProvider {
  children: React.ReactNode;
}

interface SpinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
