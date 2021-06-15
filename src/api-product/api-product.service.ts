import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import BaseService from 'src/common/interface/BaseService';

@Injectable()
export class ApiProductService implements BaseService<HttpClient> {
  deleteOne: (T: any) => any;
  httpClient: HttpClient;
  create: (T: any) => any;
  findAll: () => any;
  findOne: (params: any) => any;
}
