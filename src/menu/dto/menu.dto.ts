import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class MenuDto {
    @ApiProperty({example: "Classic menu", description: "Name of menu"})
    @IsString()
    name: string
}