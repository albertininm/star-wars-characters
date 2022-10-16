import config from 'config/app.config';
import { apiUrls, Collections } from './urls';

describe('Helpers: urls', () => {
  describe('apiUrls', () => {
    const collectionsMap: Record<string, string> = {
      movie: 'films',
      specie: 'species',
      planet: 'planets'
    };

    it.each<Collections>(['movie', 'planet', 'specie'])('should return proper URL for %s', (domain) => {
      const expectedUrl = `${config.baseApiEndpoint}/${collectionsMap[domain]}/`;

      expect(apiUrls[domain]('')).toStrictEqual(expectedUrl);
    });

    it('should add "search" param to people URL', () => {
      const search = 'yoda';
      const expectedUrl = `${config.baseApiEndpoint}/people/?search=${search}`;

      expect(apiUrls.people(search)).toStrictEqual(expectedUrl);
    });
  });
});