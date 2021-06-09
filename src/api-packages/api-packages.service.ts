import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import BaseService from 'src/common/interface/BaseService';
import { APIPackage } from 'src/graphql.schema';

@Injectable()
export class ApiPackagesService implements BaseService<HttpClient> {
  constructor(public httpClient: HttpClient) {
    this.httpClient = new HttpClient();
  }
  findOne: (params: any) => any;

  create(item: APIPackage) {
    return [];
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
}
