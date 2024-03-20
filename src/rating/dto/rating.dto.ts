import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class RatingDto {
    @ApiProperty({example: 5, description: "rating level"})
    @IsInt()
    name: number
}