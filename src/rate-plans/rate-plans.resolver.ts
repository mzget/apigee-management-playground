import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RatePlan } from 'src/graphql.schema';
import { RatePlansService } from './rate-plans.service';

@Resolver('RatePlan')
export class RatePlansResolver {
  constructor(private ratePlansService: RatePlansService) {}

  @Query()
  async ratePlans() {
    const items = await this.ratePlansService.findAll();
    return items.ratePlan;
  }

  @Query()
  async activeRatePlansForDev(@Args('developer_id') developer_id: string) {
    const items = await this.ratePlansService.findActiveRatePlansForDev(
      developer_id,
    );
    console.log('activeRatePlansForDev', items);
    return items.ratePlan;
  }

  @Query()
  async developerAcceptedRatePlans(@Args('developer_id') developer_id: string) {
    const items = await this.ratePlansService.developerAcceptedRatePlans(
      developer_id,
    );
    return items.ratePlan;
  }

  //   @ResolveField()
  //   async posts(@Parent() author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
