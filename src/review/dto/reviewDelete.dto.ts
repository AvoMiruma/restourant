import { IsInt } from "class-validator";

export class ReviewDeleteDto {
    @IsInt()
    id: number
}