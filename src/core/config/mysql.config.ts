import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export default registerAs('mysql', () => ({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  name: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
}));

export const mysqlValidationSchema = Joi.object({
  DATABASE_TYPE: Joi.string().default('mariadb'),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(3306),
  DATABASE_NAME: Joi.string().default('MyDB'),
  DATABASE_USERNAME: Joi.string().default('user'),
  DATABASE_PASSWORD: Joi.string().default('root'),
  DATABASE_SYNCHRONIZE: Joi.boolean().default(true),
});
