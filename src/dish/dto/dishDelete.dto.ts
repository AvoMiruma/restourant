import { IsInt } from "class-validator";

export class DishDeleteDto {
    @IsInt()
    id: number
}