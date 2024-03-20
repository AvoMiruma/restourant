import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class WaiterDeleteDto {
    @ApiProperty({example: 1, description: "waiter id"})
    @IsInt()
    waiterId: number
}