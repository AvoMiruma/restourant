import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class RoleUpdateDto {
    @ApiProperty({example: 1, description: "role id"})
    @IsInt()
    roleId: number

    @ApiProperty({example: "USER", description: "role name"})
    @IsString()
    role: string

    @ApiProperty({example: "basic role", description: "description about role"})
    @IsString()
    description: string
}