import { Injectable } from '@nestjs/common';
import BaseService from 'src/common/interface/BaseService';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import { Developer } from 'src/graphql.schema';

@Injectable()
export class DeveloperService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }
  create(item: Developer) {
    return [];
  }
  async findAll() {
    return await this.httpClient.get<{ developer: Developer[] }>({
      path: '/organizations/{org_name}/developers?expand=true',
    });
  }
}
