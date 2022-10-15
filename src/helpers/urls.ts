import config from '../config/app.config';

type Collections = 'people' | 'movie' | 'planet' | 'specie';

export const apiUrls: Record<Collections, (id: string) => string> = {
  people: (peopleId) => `${config.baseApiEndpoint}/people/?search=${peopleId}`,
  specie: (specieId) => `${config.baseApiEndpoint}/species/${specieId}`,
  movie: (movieId) => `${config.baseApiEndpoint}/films/${movieId}`,
  planet: (planetId) =>
    `${config.baseApiEndpoint}/planets/${planetId}`,
};
