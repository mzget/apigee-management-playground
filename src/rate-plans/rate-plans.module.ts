import { Module } from '@nestjs/common';
import { HttpClient } from 'src/common/httpClient/HttpClient';
import { RatePlansResolver } from './rate-plans.resolver';
import { RatePlansService } from './rate-plans.service';

@Module({
  providers: [RatePlansResolver, RatePlansService, HttpClient],
})
export class RatePlansModule {}
