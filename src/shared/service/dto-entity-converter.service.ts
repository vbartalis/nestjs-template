import { Injectable } from '@nestjs/common';
import { ClassConstructor, instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class DtoEntityConverterService {
  public convertToDto<E, D>(entity: E, cls: ClassConstructor<D>): D {
    return plainToInstance(cls, instanceToPlain(entity), { excludeExtraneousValues: true });
  }

  public convertToDtoArray<E, D>(entities: E[], cls: ClassConstructor<D>): D[] {
    return entities.map((entity) => {
      return this.convertToDto(entity, cls);
    });
  }

  //todo
  //   public convertToEntity<D, E>(dto: D, cls: ClassConstructor<E>): E {
  //     return plainToInstance(cls, instanceToPlain(dto));
  //   }
}
