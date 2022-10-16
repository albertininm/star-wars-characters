import { Movie } from 'types';
import { sortMovies } from './movies';

describe('Helpers: movies', () => {
  describe('sortMovies', () => {
    it('should sort movies by release_date in descending order by default', () => {
      const expected = [{release_date: '3'}, {release_date: '2'}, {release_date: '1'}];
      const movies = [{release_date: '1'}, {release_date: '2'}, {release_date: '3'}] as Movie[];

      sortMovies({movies});

      expect(movies).toStrictEqual(expect.arrayContaining(expected));
      expect(expected).toStrictEqual(expect.arrayContaining(movies));
    });

    it('should sort movies by release_date in ascending order if sort param is "oldest"', () => {
      const movies = [{release_date: '3'}, {release_date: '2'}, {release_date: '1'}]as Movie[];
      const expected = [{release_date: '1'}, {release_date: '2'}, {release_date: '3'}];

      sortMovies({movies, sortType: 'oldest'});

      expect(movies).toStrictEqual(expect.arrayContaining(expected));
      expect(expected).toStrictEqual(expect.arrayContaining(movies));
    });
  });
});