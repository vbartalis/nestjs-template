/*
https://docs.nestjs.com/openapi/decorators#decorators
*/

import { SetMetadata } from '@nestjs/common';
import { EntitySchema } from 'typeorm';

export const TYPEORM_EXTENDED_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';

// todo
// eslint-disable-next-line @typescript-eslint/ban-types
export function CustomRepository(entity?: Function | EntitySchema<any>): ClassDecorator {
  return SetMetadata(TYPEORM_EXTENDED_CUSTOM_REPOSITORY, entity);
}
