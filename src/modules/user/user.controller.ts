/*
https://docs.nestjs.com/controllers#controllers
*/

import { JwtAuthGuard } from '@core/auth/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthContext } from '@shared/decorators/auth-context.decorator';
import validationOptions from '@shared/pipes/validation-options';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findMe(@AuthContext('userId') userId: string): Promise<UserEntity> {
    return await this.userService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  async findUser(@Param('userId') userId: string): Promise<UserEntity> {
    return await this.userService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':userId')
  async update(@Param('userId') userId: string, @Body('user') userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe(validationOptions))
  @Post()
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:userId')
  async delete(@Param('userId') userId: string) {
    return await this.userService.delete(userId);
  }
}
