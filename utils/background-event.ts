import { EVENT_BACKGROUNDS } from '@/constants/backgroundEvent';

export const getEventBackground = (category: keyof typeof EVENT_BACKGROUNDS): string => {
  const normalized = category?.toLowerCase().replace(/\s+/g, '_');
  return EVENT_BACKGROUNDS[normalized] || EVENT_BACKGROUNDS.default;
};
