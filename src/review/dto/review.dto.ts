import { IsInt, IsString } from "class-validator";

export class ReviewDto {
    @IsString()
    description: string | null

    @IsInt()
    waiterId: number

    @IsInt()
    ratingName: number
}