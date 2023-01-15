export interface CalendarProps {
  onChange: (P: Date) => void;
  children?: any;
  date?: Date;
  selectedDate?: Date;
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
};