import { format, isBefore } from 'date-fns';

export const isEventDone = (date: string) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const isEventAlreadyPast = isBefore(today, date);

  return isEventAlreadyPast;
};
