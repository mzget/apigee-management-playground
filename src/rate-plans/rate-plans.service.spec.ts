import { Test, TestingModule } from '@nestjs/testing';
import { RatePlansService } from './rate-plans.service';

describe('RatePlansService', () => {
  let service: RatePlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatePlansService],
    }).compile();

    service = module.get<RatePlansService>(RatePlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
