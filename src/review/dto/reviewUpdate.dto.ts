import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class ReviewUpdateDto {

    @ApiProperty({example: 1, description: "review id"})
    @IsInt()
    id: number

    @ApiProperty({example: "Good waiter", description: "description of review"})
    @IsString()
    description: string | null
}