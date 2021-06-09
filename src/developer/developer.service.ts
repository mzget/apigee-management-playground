import { Injectable } from '@nestjs/common';
import BaseService from 'src/common/interface/BaseService';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import { Developer } from 'src/graphql.schema';

@Injectable()
export class DeveloperService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }
  findOne: (params: any) => any;
  create(item: Developer) {
    return [];
  }
  async findAll() {
    return await this.httpClient.get<{ developer: Developer[] }>({
      path: '/organizations/{org_name}/developers?expand=true&startKey=nattapon.rat@kbtg.tech',
    });
  }

  async purchaseDeveloperRatePlan({
    developer_or_company_id,
    rate_plan_id,
    start_date,
  }) {
    return await this.httpClient.post<any>({
      path: `/mint/organizations/{org_name}/developers/${developer_or_company_id}/developer-rateplans`,
      data: {
        developer: {
          id: developer_or_company_id,
        },
        startDate: start_date,
        ratePlan: {
          id: rate_plan_id,
        },
        suppressWarning: false,
      },
    });
  }
}
