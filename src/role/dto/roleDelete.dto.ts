import { IsString } from "class-validator";

export class RoleDeleteDto {
    @IsString()
    role: string
}