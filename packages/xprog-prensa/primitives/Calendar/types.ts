export interface CalendarProps {
  onChange: (P: Date) => void;
  children?: any;
  css?: {
    container?: {};
    headerGroup?: {};
    headerButton?: {};
    headerTitle?: {};
    weekGroup?: {};
    weekDay?: {};
    dayGroup?: {};
    day?: {};
    dayButton?: {};
  };
  date?: Date;
  icBackward?: any;
  icForward?: any;
  selectedDate?: Date;
}