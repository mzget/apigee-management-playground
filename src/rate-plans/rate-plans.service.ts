import { Injectable } from '@nestjs/common';
import { RatePlan } from 'src/graphql.schema';
import BaseService from 'src/common/interface/BaseService';
import { HttpClient } from 'src/common/httpClient/HttpClient';

@Injectable()
export class RatePlansService implements BaseService<RatePlan> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }

  create(item: RatePlan) {
    return [];
  }

  async findAll() {
    return await this.httpClient.get<{ ratePlan: RatePlan[] }>({
      path: '/mint/organizations/{org_name}/rate-plans',
    });
  }

  async findActiveRatePlansForDev(developer_id: string) {
    return await this.httpClient.get<{ ratePlan: RatePlan[] }>({
      path: `/mint/organizations/{org_name}/developers/${developer_id}/developer-rateplans?all=true`,
    });
  }

  async developerAcceptedRatePlans(developer_id: string) {
    return await this.httpClient.get<{ ratePlan: RatePlan[] }>({
      path: `/mint/organizations/{org_name}/developers/${developer_id}/developer-accepted-rateplans?all=true`,
    });
  }
}
