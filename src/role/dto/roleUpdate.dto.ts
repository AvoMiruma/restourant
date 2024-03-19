import { IsInt, IsString } from "class-validator";

export class RoleUpdateDto {
    @IsInt()
    roleId: number

    @IsString()
    role: string

    @IsString()
    description: string
}