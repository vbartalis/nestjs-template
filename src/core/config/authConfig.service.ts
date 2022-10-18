import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
  constructor(private configService: ConfigService) {}

  get secret(): string {
    return this.configService.get<string>('auth.secret');
  }
  get expiresIn(): string {
    return this.configService.get<string>('auth.expiresIn');
  }
}
