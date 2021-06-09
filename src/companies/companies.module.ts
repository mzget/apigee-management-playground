import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { HttpClient } from 'src/common/httpClient/HttpClient';

@Module({
  providers: [CompaniesService, CompaniesResolver, HttpClient],
})
export class CompaniesModule {}
