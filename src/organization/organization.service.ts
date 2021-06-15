import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import BaseService from 'src/common/interface/BaseService';
import { Organization } from 'src/graphql.schema';

@Injectable()
export class OrganizationService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }
  deleteOne: (T: any) => any;
  create: (T: any) => any;
  findAll() {
    return this.httpClient.get<Organization>({
      path: `/mint/organizations/{org_name}`,
    });
  }
  findOne: (params: any) => any;
}
