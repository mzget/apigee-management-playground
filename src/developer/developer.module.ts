import { Module } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import { DeveloperResolver } from './developer.resolver';
import { DeveloperService } from './developer.service';

@Module({
  providers: [DeveloperResolver, DeveloperService, HttpClient],
})
export class DeveloperModule {}
