import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const formatToDate = (date: any | undefined = undefined, format = DATE_FORMAT): string => {
  return dayjs(date).format(format);
};

export const formatToDateTime = (
  date: any | undefined = undefined,
  format = DATE_TIME_FORMAT
): string => {
  return dayjs(date).format(format);
};
