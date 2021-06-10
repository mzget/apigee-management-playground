import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrganizationService } from './organization.service';

@Resolver('Organization')
export class OrganizationResolver {
  constructor(private orgService: OrganizationService) {}

  @Query()
  async organization() {
    const items = await this.orgService.findAll();
    return items;
  }
}
