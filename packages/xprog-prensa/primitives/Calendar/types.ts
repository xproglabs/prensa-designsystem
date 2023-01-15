export interface CalendarProps {
  onChange: (P: Date) => void;
  children?: any;
  date?: Date;
  selectedDate?: Date;
}