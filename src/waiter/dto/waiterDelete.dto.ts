import { IsInt } from "class-validator";

export class WaiterDeleteDto {
    @IsInt()
    waiterId: number
}