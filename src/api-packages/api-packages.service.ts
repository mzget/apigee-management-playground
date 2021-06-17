import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import BaseService from 'src/common/interface/BaseService';
import { APIPackage, APIPackageInput, RatePlan } from 'src/graphql.schema';

@Injectable()
export class ApiPackagesService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }
  deleteOne({ package_id }: any) {
    return this.httpClient.delete<APIPackage>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}`,
    });
  }

  findOne({ package_id }) {
    return this.httpClient.get<APIPackage>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}`,
    });
  }

  create({ description, displayName, name, product, status }: APIPackageInput) {
    return this.httpClient.post<APIPackage>({
      path: `/mint/organizations/{org_name}/monetization-packages`,
      data: {
        description,
        displayName,
        name,
        product,
        status,
      },
    });
  }

  findAll() {
    return this.httpClient.get<{ monetizationPackage: APIPackage[] }>({
      path: '/mint/organizations/{org_name}/monetization-packages',
    });
  }

  addProductToPackage({ package_id, product_id }) {
    return this.httpClient.post<APIPackage>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}/products/${product_id}`,
      data: {},
    });
  }

  deleteProductFormPackage({ package_id, product_id }) {
    return this.httpClient.delete<APIPackage>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}/products/${product_id}`,
    });
  }

  createRatePlan(package_id: string, params: RatePlan) {
    return this.httpClient.post<RatePlan>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}/rate-plans`,
      data: params,
    });
  }

  updateDraftRatePlan(package_id: string, plan_id: string, params: RatePlan) {
    return this.httpClient.put<any>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}/rate-plans/${plan_id}`,
      data: params,
    });
  }

  deleteDraftRatePlan(package_id: string, plan_id: string) {
    return this.httpClient.delete<any>({
      path: `/mint/organizations/{org_name}/monetization-packages/${package_id}/rate-plans/${plan_id}`,
    });
  }
}
