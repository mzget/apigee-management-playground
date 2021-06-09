import { Module } from '@nestjs/common';
import { ApiPackagesService } from './api-packages.service';
import { ApiPackagesResolver } from './api-packages.resolver';
import { HttpClient } from 'src/common/httpClient/HttpClient';

@Module({
  providers: [ApiPackagesService, ApiPackagesResolver, HttpClient],
})
export class ApiPackagesModule {}
