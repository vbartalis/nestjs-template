import { AppConfigModule } from '@core/config/config.module';
import { MySQLConfigService } from '@core/config/mysqlConfig.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (mySQLConfigService: MySQLConfigService) => ({
        type: mySQLConfigService.type as DatabaseType,
        host: mySQLConfigService.host,
        port: mySQLConfigService.port,
        username: mySQLConfigService.username,
        password: mySQLConfigService.password,
        database: mySQLConfigService.name,
        synchronize: mySQLConfigService.synchronize,
        entities: ['./dist/modules/**/*.entity.{ts,js}'],
        // autoLoadEntities: true,
        // entities: [User],
        migrations: ['./dist/database/migrations/**/*.{ts,js}'],
      }),
      inject: [MySQLConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
  controllers: [],
  providers: [],
})
export class MySQLProviderModule {}
