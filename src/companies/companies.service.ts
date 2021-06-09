import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import BaseService from 'src/common/interface/BaseService';
import { Company } from 'src/graphql.schema';

@Injectable()
export class CompaniesService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }

  create: (T: any) => any;
  async findAll() {
    return await this.httpClient.get<{ company: Company[] }>({
      path: `/organizations/{org_name}/companies?expand=true`,
    });
  }

  async findOne({ company_name }) {
    return await this.httpClient.get<Company>({
      path: `/organizations/{org_name}/companies/${company_name}`,
    });
  }
}
