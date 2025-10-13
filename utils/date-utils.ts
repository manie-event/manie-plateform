import { format, isBefore, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export const isEventDone = (date: string) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const isEventAlreadyPast = isBefore(today, date);

  return isEventAlreadyPast;
};

export const formatDate = (date: string[]) => {
  const formatDate = date.map((d) => format(parseISO(d), 'dd MMM yyyy', { locale: fr }));
  return formatDate;
};

export const dateCounter = (date: string) => {
  const today = new Date();
  const targetDate = new Date(date);
  const timeDiff = targetDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};
