import config from '../app.config';

type Collections = 'people' | 'films' | 'planets';

export const apiUrls: Record<Collections, (id: string) => string> = {
  people: (peopleId) => `${config.baseApiEndpoint}/people/?search=${peopleId}`,
  films: (filmId) => `${config.baseApiEndpoint}/films/?search=${filmId}`,
  planets: (planetId) => `${config.baseApiEndpoint}/planets/?search=${planetId}`,
};
