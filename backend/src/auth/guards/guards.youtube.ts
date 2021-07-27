import { AuthGuard } from "@nestjs/passport";

export class YouTubeGuard extends AuthGuard('youtube'){};