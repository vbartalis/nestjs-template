// import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CustomRepository } from 'src/database/type-orm-extended/type-orm-extended.decorator';
import { Repository } from 'typeorm';
import { EUser } from './user.entity';
// import { allUserGroupsForSerializing, UserSerializer } from './user.serializer';

@CustomRepository(EUser)
export class UserRepository extends Repository<EUser> {
  // transform(model: UserEntity): UserSerializer {
  //   const tranformOptions = {
  //     groups: allUserGroupsForSerializing,
  //   };
  //   return plainToInstance(UserSerializer, instanceToPlain(model, tranformOptions), tranformOptions);
  // }
  // transformMany(models: UserEntity[]): UserSerializer[] {
  //   return models.map((model) => this.transform(model));
  // }
}
