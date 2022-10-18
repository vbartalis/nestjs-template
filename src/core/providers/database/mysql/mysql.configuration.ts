import * as dotenv from 'dotenv';
import { env } from 'process';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

dotenv.config();

// this file is only used for the database migrations, it needs to have the same options as the ProviderModule
const configs: MysqlConnectionOptions = {
  database: env.DATABASE_NAME,
  type: env.DATABASE_TYPE as 'mysql' | 'mariadb',
  host: env.DATABASE_HOST,
  port: parseInt(env.DATABASE_PORT, 10),
  // name: env.DATABASE_NAME,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  synchronize: env.DATABASE_SYNCHRONIZE === 'true',
  entities: ['./src/modules/**/*.entity.{ts,js}'],
  // autoLoadEntities: true,
  // entities: [User],
  migrations: ['./src/database/migrations/**/*.{ts,js}'],
};

export default new DataSource(configs);
