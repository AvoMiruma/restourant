import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class ReviewDto {
    @ApiProperty({example: "Good waiter", description: "description of review"})
    @IsString()
    description: string | null

    @ApiProperty({example: 1, description: "waiter id"})
    @IsInt()
    waiterId: number

    @ApiProperty({example: 1, description: "rating level"})
    @IsInt()
    ratingName: number
}