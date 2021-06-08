import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperResolver } from './developer.resolver';

describe('DeveloperResolver', () => {
  let resolver: DeveloperResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloperResolver],
    }).compile();

    resolver = module.get<DeveloperResolver>(DeveloperResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
