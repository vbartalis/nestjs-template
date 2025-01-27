import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthContext = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  // if route is protected, there is a user set in auth.guard
  if (!!req.user) {
    return !!data ? req.user[data] : req.user;
  }

  // // in case a route is not protected, we still want to get the optional auth user from jwt
  // const token = req.headers.authorization ? (req.headers.authorization as string).split(' ') : null;
  // if (token && token[1]) {
  //   const decoded: any = jwt.verify(token[1], SECRET);
  //   return !!data ? decoded[data] : decoded.user;
  // }
});
