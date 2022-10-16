import { getFormattedDate } from './date';

describe('Helpers: date', () => {
  describe('getFormattedDate', () => {
    it('should return year and formatted date', () => {
      const {year, date} = getFormattedDate('2022-10-17');

      expect(date).toStrictEqual('Oct 17, 2022');
      expect(year).toStrictEqual(2022);
    });

    it('should return "Invalid Date" and NaN for a given invalid date', () => {
      const {year, date} = getFormattedDate('invalid');

      expect(date).toStrictEqual('Invalid Date');
      expect(year).toStrictEqual(NaN);
    });
  });
});