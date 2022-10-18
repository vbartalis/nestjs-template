import { ModelSerializer } from '@shared/serializers/model.serializer';
import { Expose } from 'class-transformer';
import { IUser } from './user.interface';

export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];

export const extendedUserGroupsForSerializing: string[] = [...defaultUserGroupsForSerializing, 'user.image'];

export const allUserGroupsForSerializing: string[] = [...extendedUserGroupsForSerializing, 'user.password'];

export class UserSerializer extends ModelSerializer implements IUser {
  id: string;
  username: string;
  email: string;
  bio: string;
  @Expose({ groups: ['user.image'] })
  image: string;
  @Expose({ groups: ['user.password'] })
  password: string;
  @Expose({ groups: ['user.timestamps'] })
  createdAt: Date;
  @Expose({ groups: ['user.timestamps'] })
  updatedAt: Date;
}
