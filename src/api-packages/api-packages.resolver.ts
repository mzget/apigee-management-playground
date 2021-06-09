import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ApiPackagesService } from './api-packages.service';

@Resolver('APIPackage')
export class ApiPackagesResolver {
  constructor(private apiPackagesService: ApiPackagesService) {}

  @Query()
  async apiPackages() {
    const items = await this.apiPackagesService.findAll();
    return items.monetizationPackage;
  }

  @Mutation()
  async addProductToPackage(
    @Args('package_id') package_id: string,
    @Args('product_id') product_id: string,
  ) {
    const items = await this.apiPackagesService.addProductToPackage({
      package_id,
      product_id,
    });
    console.log('addProductToPackage', items);
    return items;
  }

  @Mutation()
  async deleteProductFormPackage(
    @Args('package_id') package_id: string,
    @Args('product_id') product_id: string,
  ) {
    const items = await this.apiPackagesService.deleteProductFormPackage({
      package_id,
      product_id,
    });
    console.log('deleteProductFormPackage', items);
    return items;
  }
}
