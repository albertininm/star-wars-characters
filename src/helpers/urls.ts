import config from '../config/app.config';

type Collections = 'people' | 'film' | 'planet' | 'specie';

export const apiUrls: Record<Collections, (id: string) => string> = {
  people: (peopleId) => `${config.baseApiEndpoint}/people/?search=${peopleId}`,
  specie: (specieId) => `${config.baseApiEndpoint}/species/${specieId}`,
  film: (filmId) => `${config.baseApiEndpoint}/films/${filmId}`,
  planet: (planetId) =>
    `${config.baseApiEndpoint}/planets/${planetId}`,
};
