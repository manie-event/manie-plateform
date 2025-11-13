import { format, isBefore, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export const isEventDone = (date: string) => {
  if (!date) return false;

  const today = format(new Date(), 'yyyy-MM-dd');
  const isEventAlreadyPast = isBefore(today, date);

  return isEventAlreadyPast;
};

export const formatDate = (dates: (string | Date)[]) => {
  if (!dates || !dates.length) return '';

  const formatted = dates.map((d) => {
    const dateObj = typeof d === 'string' ? parseISO(d) : d;
    return format(dateObj, 'dd MMM yyyy', { locale: fr });
  });

  return `du ${formatted[0]} au ${formatted[1]}`;
};
export const dateCounter = (date: string) => {
  const today = new Date();

  const targetDate = new Date(date);
  const timeDiff = targetDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};
