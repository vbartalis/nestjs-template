/*
https://docs.nestjs.com/modules
*/

import { AppConfigModule } from '@core/config/config.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    AppConfigModule,
    // JwtModule.registerAsync({
    //   imports: [AppConfigModule],
    //   inject: [AuthConfigService],
    //   useFactory: async (authConfigService: AuthConfigService) => ({
    //     secret: authConfigService.secret,
    //     signOptions: { expiresIn: authConfigService.expiresIn },
    //   }),
    // }),
    // JwtModule.register({
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '60s' },
    // }),
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AuthConfigModule {}
