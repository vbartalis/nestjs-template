import { UserSeed } from '@database/seeds/user.seed';
import { EUser } from '@modules/user/user.entity';
import * as bcrypt from 'bcryptjs';

import * as datasource from 'src/core/providers/database/mysql/mysql.configuration';

import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedUser1666113466103 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userSeed: any = UserSeed[0];
    console.log(userSeed);
    const pwd = userSeed.password;
    console.log(pwd);
    userSeed.password = this.encodePassword(userSeed.password);
    await datasource.default.getRepository(EUser).save(userSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}

  public encodePassword(password: string): string {
    console.log(password);

    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}
