import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class DishDeleteDto {
    @ApiProperty({example: 1, description: "dish id"})
    @IsInt()
    id: number
}