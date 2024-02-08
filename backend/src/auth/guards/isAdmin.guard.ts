import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class isAdminGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log("hiiii")
    if (
      request.isAuthenticated() &&
      (request.session.passport.user.role === 'admin' ||
        request.session.passport.user.role === 'owner')
    ) {
      console.log('admin guard');
      return true;
    } else if (
      request.isAuthenticated() &&
      request.session.passport.user.role === 'user'
    ) {
      return false;
    } else {
      return false;
    }
  }
}
