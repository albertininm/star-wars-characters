import { getColorFromText } from './colors';

describe('Helpers: colors', () => {
  describe('getColorFromText', () => {
    it('should return same color for same given text', () => {
      const text = 'some text';

      const color1 = getColorFromText(text);
      const color2 = getColorFromText(text);

      expect(color1).toStrictEqual(color2);
    });
  });
});