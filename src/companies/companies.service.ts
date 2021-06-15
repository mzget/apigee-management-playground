import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import BaseService from 'src/common/interface/BaseService';
import { APIPackage, Company } from 'src/graphql.schema';

@Injectable()
export class CompaniesService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }
  deleteOne: (T: any) => any;

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

  async companyAcceptedPackage(company_id: string, current = false) {
    return await this.httpClient.get<{ monetizationPackage: APIPackage[] }>({
      path: `/mint/organizations/{org_name}/companies/${company_id}/monetization-packages?current=${current}`,
    });
  }
}
