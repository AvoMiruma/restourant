import { IsInt } from "class-validator";

export class RatingUpdateDto {
    @IsInt()
    id: number

    @IsInt()
    name: number
}