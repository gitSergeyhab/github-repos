const addZero = (num: number) => (num < 10 ? `0${num}` : num);

export const getStringDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${addZero(day)}.${addZero(month)}.${year}`;
};
