import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeveloperService } from './developer.service';

@Resolver()
export class DeveloperResolver {
  constructor(private developerService: DeveloperService) {}

  @Query()
  async developers() {
    const items = await this.developerService.findAll();
    return items.developer;
  }

  @Mutation()
  async purchaseRatePlan(
    @Args('developer_or_company_id') developer_or_company_id: string,
    @Args('rate_plan_id') rate_plan_id: string,
    @Args('start_date') start_date: string,
  ) {
    const items = await this.developerService.purchaseDeveloperRatePlan({
      rate_plan_id,
      developer_or_company_id,
      start_date,
    });
    console.log(items);
    return items;
  }
}
