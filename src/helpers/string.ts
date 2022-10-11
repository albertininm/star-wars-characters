export const getInitialsFromName = (name: string) => {
  const [firstName, secondName] = name.split(' ');
  
  return `${firstName?.[0] ?? ''}${secondName?.[0] ?? ''}`;
};