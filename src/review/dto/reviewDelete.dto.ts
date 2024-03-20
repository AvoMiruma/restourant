import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class ReviewDeleteDto {
    @ApiProperty({example: 1, description: "review id"})
    @IsInt()
    id: number
}