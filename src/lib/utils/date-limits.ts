export const getStartDate = (date: number): number => {
  const baseDate = new Date(date);

  return new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate(),
    0,
    0,
    0,
    0,
  ).getTime();
};

export const getEndDate = (date: number): number => {
  const baseDate = new Date(date);
  return new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate(),
    23,
    59,
    59,
    999,
  ).getTime();
};
