import { Test, TestingModule } from '@nestjs/testing';
import { ApiPackagesResolver } from './api-packages.resolver';

describe('ApiPackagesResolver', () => {
  let resolver: ApiPackagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPackagesResolver],
    }).compile();

    resolver = module.get<ApiPackagesResolver>(ApiPackagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
