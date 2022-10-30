/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UpdateUserDto } from './user.dto';
import { EUser } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserRepository) {}

  async findAll(): Promise<EUser[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<EUser> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<EUser> {
    return await this.usersRepository.findOneBy({ email });
  }

  async save(user: EUser): Promise<EUser> {
    this.usersRepository.save(user);
    return user;
  }

  async update(id: string, user: UpdateUserDto) {
    return await this.usersRepository.update(id, user);
  }

  async delete(userId: string): Promise<DeleteResult> {
    return await this.usersRepository.delete({ id: userId });
  }
}
