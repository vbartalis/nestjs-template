import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MySQLConfigService {
  constructor(private configService: ConfigService) {}

  get type(): string {
    return this.configService.get<string>('mysql.type');
  }

  get host(): string {
    return this.configService.get<string>('mysql.host');
  }

  get port(): number {
    return this.configService.get<number>('mysql.port');
  }

  get name(): string {
    return this.configService.get<string>('mysql.name');
  }

  get username(): string {
    return this.configService.get<string>('mysql.username');
  }

  get password(): string {
    return this.configService.get<string>('mysql.password');
  }

  get synchronize(): boolean {
    return this.configService.get<boolean>('mysql.synchronize');
  }
}
