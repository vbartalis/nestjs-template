import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
}));

export const appValidationSchema = Joi.object({
  APP_NAME: Joi.string().default('MyApp'),
  APP_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  APP_URL: Joi.string().default('http://my-app.test'),
  APP_PORT: Joi.number().default(9000),
});
