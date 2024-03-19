import { IsInt } from "class-validator";

export class MenuDeleteDto {
    @IsInt()
    id: number
}