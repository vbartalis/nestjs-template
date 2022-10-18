import { Exclude } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginReqDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;
}

Exclude();
export class LoginResDto {
  constructor(public token: string) {}
}
