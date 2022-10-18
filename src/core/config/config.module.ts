/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import appConfig, { appValidationSchema } from './app.config';
import { AppConfigService } from './appConfig.service';
import authConfig, { authValidationSchema } from './auth.config';
import { AuthConfigService } from './authConfig.service';
import mysqlConfig, { mysqlValidationSchema } from './mysql.config';
import { MySQLConfigService } from './mysqlConfig.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, mysqlConfig, authConfig],
      validationSchema: Joi.object({
        appValidationSchema,
        mysqlValidationSchema,
        authValidationSchema,
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService, AuthConfigService, MySQLConfigService],
  exports: [ConfigService, AppConfigService, AuthConfigService, MySQLConfigService],
})
export class AppConfigModule {}
