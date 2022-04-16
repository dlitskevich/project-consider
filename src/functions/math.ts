export const toStandart = (array: number[]) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const delta = max - min;
  return (e: number) => (e - min) / delta;
};
