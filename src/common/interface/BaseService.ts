import { HttpClient } from '../httpClient/HttpClient';

export default interface IBaseService<T> {
  httpClient: HttpClient;

  create: (T) => any;
  findAll: () => any;
  findOne: (params: any) => any;
}
