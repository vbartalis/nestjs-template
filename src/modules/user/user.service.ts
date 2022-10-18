/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ email });
  }

  async create(inputs: CreateUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.create(inputs);
    this.usersRepository.save(user);
    return user;
  }

  async save(user: UserEntity): Promise<UserEntity> {
    this.usersRepository.save(user);

    return user;
  }

  async update(id: string, user: UpdateUserDto): Promise<any> {
    return await this.usersRepository.update(id, user);
  }

  async delete(userId: string): Promise<DeleteResult> {
    return await this.usersRepository.delete({ id: userId });
  }
}
