import { Module } from '@nestjs/common';
import { DtoEntityConverterService } from './service/dto-entity-converter.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DtoEntityConverterService],
  exports: [DtoEntityConverterService],
})
export class SharedModule {}
