import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export default registerAs('auth', () => ({
  secret: process.env.AUTH_JWT_SECRET,
  expiresIn: parseInt(process.env.AUTH_JWT_TOKEN_EXPIRES_IN, 10),
}));

export const authValidationSchema = Joi.object({
  AUTH_JWT_SECRET: Joi.string().default('secret'),
  AUTH_JWT_TOKEN_EXPIRES_IN: Joi.number().default(7), //7d
});
