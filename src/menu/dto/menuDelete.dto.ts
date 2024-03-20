import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class MenuDeleteDto {
    @ApiProperty({example: 1, description: "menu id"})
    @IsInt()
    id: number
}