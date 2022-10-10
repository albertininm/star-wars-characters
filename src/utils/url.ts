export type QueryParamsType = string | string[][] | Record<string, string> | URLSearchParams | undefined;

export function parseParams(query: QueryParamsType) {
  const params = new URLSearchParams(query);

  return params.toString();
}