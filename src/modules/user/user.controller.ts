import { JwtAuthGuard } from '@core/auth/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthContext } from '@shared/decorators/auth-context.decorator';
import { DtoEntityConverterService } from '@shared/service/dto-entity-converter.service';
import { GetUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService, private converterService: DtoEntityConverterService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user/')
  async findMe(@AuthContext('userId') userId: string) {
    const entity = await this.userService.findOne(userId);
    const dto = this.converterService.convertToDto(entity, GetUserDto);
    return dto;
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/:userId')
  async findUser(@Param('userId') userId: string) {
    const entity = await this.userService.findOne(userId);
    return this.converterService.convertToDto(entity, GetUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('user/:userId')
  async update(@Param('userId') userId: string, @Body() userData: UpdateUserDto) {
    const result = await this.userService.update(userId, userData);
    return { affected: result.affected };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('user/:userId')
  async delete(@Param('userId') userId: string) {
    const result = await this.userService.delete(userId);
    return { affected: result.affected };
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/')
  async findAll(): Promise<GetUserDto[]> {
    const entities = await this.userService.findAll();
    const dtos = this.converterService.convertToDtoArray(entities, GetUserDto);
    return dtos;
  }
}
