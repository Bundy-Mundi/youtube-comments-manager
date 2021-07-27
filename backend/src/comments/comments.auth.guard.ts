import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

const validateHeaders = (headers:any) => {
    if(!headers.authorization) return false;
    return true;
}

export class AuthGuard implements CanActivate{
    canActivate(
        context: ExecutionContext,
      ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateHeaders(request.headers)
    }
}