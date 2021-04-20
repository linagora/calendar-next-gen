export enum DATE_FORMATS {
  FULL_DATE = 'full date',
  FULL_DATE_TIME = 'full date time'
}

const DATE_FORMAT_OPTIONS = {
  [DATE_FORMATS.FULL_DATE]: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  [DATE_FORMATS.FULL_DATE_TIME]: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  },
};

export const formatDate = (date: Date, locale = 'en', format = DATE_FORMATS.FULL_DATE_TIME): string => {
  return new Intl.DateTimeFormat(locale, DATE_FORMAT_OPTIONS[format] as Intl.DateTimeFormatOptions).format(date);
};
