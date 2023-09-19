// Native
export const sortBy = (key: string, order: 'asc' | 'desc' = 'asc') => {
  const factor = order === 'asc' ? 1 : -1;
  return (a: any, b: any) => (a[key] > b[key]) ? factor : ((b[key] > a[key]) ? factor * -1 : 0);
};
