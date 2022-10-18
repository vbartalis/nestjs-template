/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginReqDto, LoginResDto } from './dto/login.dto';
import { RegisterReqDto, RegisterResDto } from './dto/register.dto';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async create(@Body() req: RegisterReqDto): Promise<RegisterResDto> {
    return await this.authService.register(req);
  }

  @Post('/login')
  async login(@Body() req: LoginReqDto): Promise<LoginResDto> {
    return await this.authService.login(req);
  }
}
