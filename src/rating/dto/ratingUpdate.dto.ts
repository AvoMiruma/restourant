import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class RatingUpdateDto {
    @ApiProperty({example: 1, description: "rating id"})
    @IsInt()
    id: number

    @ApiProperty({example: 5, description: "rating level"})
    @IsInt()
    name: number
}