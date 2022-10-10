import config from '../app.config';
import { parseParams, QueryParamsType } from '../utils/url';

export const peopleUrls = {
  people: (characterId: string) => buildUrlWithParams(`${config.baseApiEndpoint}/api/people/`, {search: characterId}),
  films: (filmId: string) => buildUrlWithParams(`${config.baseApiEndpoint}/api/films/`, {search: filmId}),
  planets: (planetId: string) => buildUrlWithParams(`${config.baseApiEndpoint}/api/planets/`, {search: planetId}),
};

export function buildUrlWithParams(url: string, params: QueryParamsType) {
  const parsedParams = parseParams(params);

  return `${url}?${parsedParams}`;
}
