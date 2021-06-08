import { Test, TestingModule } from '@nestjs/testing';
import { RatePlansResolver } from './rate-plans.resolver';

describe('RatePlansResolver', () => {
  let resolver: RatePlansResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatePlansResolver],
    }).compile();

    resolver = module.get<RatePlansResolver>(RatePlansResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
