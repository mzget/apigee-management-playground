import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { APIPackageInput, RatePlan } from 'src/graphql.schema';
import { ApiPackagesService } from './api-packages.service';

@Resolver('APIPackage')
export class ApiPackagesResolver {
  constructor(private apiPackagesService: ApiPackagesService) {}

  @Query()
  async apiPackages() {
    const items = await this.apiPackagesService.findAll();
    console.log('apiPackages', items);
    return items.monetizationPackage;
  }

  @Query()
  async apiPackage(@Args('package_id') package_id: string) {
    const items = await this.apiPackagesService.findOne({ package_id });
    console.log('apiPackage', items);
    return items;
  }

  @Mutation()
  async deletePackage(@Args('package_id') package_id: string) {
    const response = await this.apiPackagesService.deleteOne({ package_id });
    console.log('deletePackage', response);

    return response;
  }

  @Mutation()
  async createPackage(@Args('packageInput') packageInput: APIPackageInput) {
    const response = await this.apiPackagesService.create(packageInput);
    console.log('createPackage', response);

    return response;
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

  @Mutation()
  async createRatePlan(
    @Args('package_id') package_id: string,
    @Args('params') params: RatePlan,
  ) {
    const items = await this.apiPackagesService.createRatePlan(
      package_id,
      params,
    );
    console.log('createRatePlan', items);
    return items;
  }

  @Mutation()
  async deleteDraftRatePlan(
    @Args('package_id') package_id: string,
    @Args('plan_id') plan_id: string,
  ) {
    const items = await this.apiPackagesService.deleteDraftRatePlan(
      package_id,
      plan_id,
    );
    console.log('deleteDraftRatePlan', items);
    return items;
  }
}
