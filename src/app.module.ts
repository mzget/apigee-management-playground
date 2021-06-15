import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { BigIntResolver, JSONResolver } from 'graphql-scalars';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatePlansModule } from './rate-plans/rate-plans.module';
import { DeveloperModule } from './developer/developer.module';
import { ApiPackagesModule } from './api-packages/api-packages.module';
import { CompaniesModule } from './companies/companies.module';
import { OrganizationModule } from './organization/organization.module';
import { ApiProductModule } from './api-product/api-product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RatePlansModule,
    DeveloperModule,
    ApiPackagesModule,
    CompaniesModule,
    OrganizationModule,
    ApiProductModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      resolvers: { BigInt: BigIntResolver, JSON: JSONResolver },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
