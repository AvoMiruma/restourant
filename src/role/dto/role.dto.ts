import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RoleDto {
    @ApiProperty({example: "USER", description: "role name"})
    @IsString()
    role: string

    @ApiProperty({example: "basic role", description: "description about role"})
    @IsString()
    description: string

}