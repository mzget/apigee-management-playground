import { Test, TestingModule } from '@nestjs/testing';
import { ApiPackagesService } from './api-packages.service';

describe('ApiPackagesService', () => {
  let service: ApiPackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPackagesService],
    }).compile();

    service = module.get<ApiPackagesService>(ApiPackagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
