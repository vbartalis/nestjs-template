import { MySQLProviderModule } from '@core/providers/database/mysql/provider.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthConfigModule } from './core/auth/authConfig.module';
import { AppConfigModule } from './core/config/config.module';
import { TypeOrmExtendedModule } from './database/type-orm-extended/type-orm-extended.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DtoEntityConverterService } from './shared/service/dto-entity-converter.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    SharedModule,
    AuthModule,
    TypeOrmExtendedModule,
    AuthConfigModule,
    UserModule,
    AppConfigModule,
    MySQLProviderModule,
  ],
  controllers: [AppController],
  providers: [DtoEntityConverterService, AppService],
})
export class AppModule {}
