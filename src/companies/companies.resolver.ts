import { Args, Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';

@Resolver('Company')
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}

  @Query()
  async companies() {
    const items = await this.companiesService.findAll();
    return items.company;
  }

  @Query()
  async company(@Args('company_name') company_name: string) {
    const items = await this.companiesService.findOne({ company_name });
    return items;
  }

  @Query()
  async companyAcceptedPackage(
    @Args('company_id') company_id: string,
    @Args('current') current: boolean,
  ) {
    const items = await this.companiesService.companyAcceptedPackage(
      company_id,
      current,
    );
    console.log('companyAcceptedPackage', items.monetizationPackage);
    return items.monetizationPackage;
  }
}
