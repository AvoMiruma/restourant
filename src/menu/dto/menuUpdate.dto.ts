import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class MenuUpdateDto {
    @ApiProperty({example: 1, description: "menu id"})
    @IsInt()
    id: number

    @ApiProperty({example: "Classic menu", description: "Name of menu"})
    @IsString()
    name: string
}