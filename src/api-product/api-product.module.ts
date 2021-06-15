import { Module } from '@nestjs/common';
import { ApiProductService } from './api-product.service';
import { ApiProductResolver } from './api-product.resolver';
import { HttpClient } from 'src/common/httpClient/HttpClient';

@Module({
  providers: [ApiProductService, ApiProductResolver, HttpClient],
})
export class ApiProductModule {}
