import { Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginReqDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

@Expose()
export class LoginResDto {
  constructor(public token: string) {}
}
