import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RoleDeleteDto {
    @ApiProperty({example: "USER", description: "role name"})
    @IsString()
    role: string
}