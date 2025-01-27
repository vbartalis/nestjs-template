import { UserController } from './user.controller';
import { UserService } from './user.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { TypeOrmExtendedModule } from 'src/database/type-orm-extended/type-orm-extended.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmExtendedModule.forCustomRepository([UserRepository]), SharedModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
