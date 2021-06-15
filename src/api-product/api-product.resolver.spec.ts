import { Test, TestingModule } from '@nestjs/testing';
import { ApiProductResolver } from './api-product.resolver';

describe('ApiProductResolver', () => {
  let resolver: ApiProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiProductResolver],
    }).compile();

    resolver = module.get<ApiProductResolver>(ApiProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
