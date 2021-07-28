import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { AuthModule } from "./auth/auth.module";
import { CommentsModule } from "./comments/comments.module";

let ALL_V1_MODULES = [AppModule, AuthModule, CommentsModule];
let ALL_V2_MODULES = [];
@Module({
    imports: [
      AppModule,
      RouterModule.register([
        {
          path: 'api/v1',
          children: ALL_V1_MODULES
        },
      ]),
      RouterModule.register([
        {
          path: 'api/v2',
          children: ALL_V2_MODULES
        },
      ]),
    ],
  })
  export class ApiRouterModule {};