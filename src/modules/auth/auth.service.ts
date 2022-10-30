/*
https://docs.nestjs.com/providers#services
*/

import { EUser } from '@modules/user/user.entity';
import { UserService } from '@modules/user/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { plainToInstance } from 'class-transformer';
import { LoginReqDto, LoginResDto } from './dto/login.dto';
import { RegisterReqDto, RegisterResDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  public async register(body: RegisterReqDto): Promise<RegisterResDto | never> {
    const { username, email, password }: RegisterReqDto = body;
    let user = await this.userService.findOneByEmail(email);
    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    user = new EUser();
    user.username = username;
    user.email = email;
    user.password = password;
    user = await this.userService.save(user);
    return plainToInstance(RegisterResDto, user);
  }

  public async login(body: LoginReqDto): Promise<LoginResDto> {
    const { email, password }: LoginReqDto = body;
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }
    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }
    const token = this.generateToken(user);
    return new LoginResDto(token);
  }

  // Generate JWT Token
  private generateToken(user: EUser): string {
    return this.jwtService.sign({ id: user.id, email: user.email });
  }
}
