import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CustomRepository } from 'src/database/type-orm-extended/type-orm-extended.decorator';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { allUserGroupsForSerializing, UserSerializer } from './user.serializer';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  transform(model: UserEntity): UserSerializer {
    const tranformOptions = {
      groups: allUserGroupsForSerializing,
    };
    return plainToInstance(UserSerializer, instanceToPlain(model, tranformOptions), tranformOptions);
  }

  transformMany(models: UserEntity[]): UserSerializer[] {
    return models.map((model) => this.transform(model));
  }
}
