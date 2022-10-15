export const getInitialsFromName = (name: string) => {
  const [firstName, secondName] = name.split(' ');
  
  return `${firstName?.[0] ?? ''}${secondName?.[0] ?? ''}`;
};

export const getFormattedSynopsis = (synopsis: string) => {
  return synopsis.replace(/(\r\n|\n|\r)/gm, '').split('').slice(0, 151).join('');
};