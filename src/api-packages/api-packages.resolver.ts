import { Query, Resolver } from '@nestjs/graphql';
import { ApiPackagesService } from './api-packages.service';

@Resolver()
export class ApiPackagesResolver {
  constructor(private apiPackagesService: ApiPackagesService) {}

  @Query()
  async apiPackages() {
    const items = await this.apiPackagesService.findAll();
    return items.monetizationPackage;
  }
}
