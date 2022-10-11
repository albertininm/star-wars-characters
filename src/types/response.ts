export interface Response<ResultType> {
  count: number;
  next?: string;
  previous?: string;
  results: ResultType[];
}
