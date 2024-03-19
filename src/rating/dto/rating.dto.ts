import { IsInt } from "class-validator";

export class RatingDto {
    @IsInt()
    name: number
}