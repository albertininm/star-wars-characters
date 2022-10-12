const NUMBER_OF_HASHABLE_COLORS = 6;

export const getColorFromText = (text: string): string  => {
  return Colors[getNumberFromString(text)];
};

export const getNumberFromString = (value: string, total = NUMBER_OF_HASHABLE_COLORS): number => {
  let hash = 0;

  if (value) {
    let chr;

    if (value.length === 0) return hash;

    for (let i = 0; i < value.length; i++) {
      chr = value.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
  }

  return Math.abs(hash % total) << 0;
};


export const Colors = ['yellow', 'green', 'blue', 'purple', 'orange', 'red', 'gray'] as const;