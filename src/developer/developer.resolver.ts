import { Query, Resolver } from '@nestjs/graphql';
import { DeveloperService } from './developer.service';

@Resolver()
export class DeveloperResolver {
  constructor(private developerService: DeveloperService) {}

  @Query()
  async developers() {
    const items = await this.developerService.findAll();
    return items.developer;
  }
}
