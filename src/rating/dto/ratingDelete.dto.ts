import { IsInt } from "class-validator";

export class RatingDeleteDto {
    @IsInt()
    id: number
}