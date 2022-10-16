import { parseParams } from './url';

describe('Utils', () => {
  describe('url', () => {
    it('should return the string param for a given object', () => {
      const expectedStr = 'param1=val1&param2=val2';
      const params = {param1: 'val1', param2: 'val2'};

      const parsedParams = parseParams(params);

      expect(parsedParams).toStrictEqual(expectedStr);
    });

    it('should return empty string if param is empty object', () => {
      const params = {};

      const parsedParams = parseParams(params);

      expect(parsedParams).toStrictEqual('');
    });
  });
});