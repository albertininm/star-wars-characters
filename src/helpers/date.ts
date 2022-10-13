export const getFormattedDate = (date: string): {date: string, year: number} => {
  const dateObj = new Date(date);

  return {
    date: dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    year: dateObj.getFullYear(),
  };
};
