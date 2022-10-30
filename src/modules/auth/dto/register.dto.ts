import { Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterReqDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @MinLength(5)
  username: string;
}

export class RegisterResDto {
  @Expose()
  email: string;
  @Expose()
  username: string;
}
