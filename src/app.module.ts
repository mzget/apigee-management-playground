import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { BigIntResolver } from 'graphql-scalars';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatePlansModule } from './rate-plans/rate-plans.module';
import { DeveloperModule } from './developer/developer.module';
import { ApiPackagesModule } from './api-packages/api-packages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RatePlansModule,
    DeveloperModule,
    ApiPackagesModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      resolvers: { BigInt: BigIntResolver },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
