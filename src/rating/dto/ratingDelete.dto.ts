import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class RatingDeleteDto {
    @ApiProperty({example: 1, description: "rating id"})
    @IsInt()
    id: number
}