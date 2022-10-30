import { Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly username: string;
  @IsEmail()
  readonly email: string;
}

export class GetUserDto {
  @Expose()
  id: string;
  @Expose()
  username: string;
  @Expose()
  email: string;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
