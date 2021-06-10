import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationResolver } from './organization.resolver';
import { HttpClient } from 'src/common/httpClient/HttpClient';

@Module({
  providers: [OrganizationService, OrganizationResolver, HttpClient],
})
export class OrganizationModule {}
