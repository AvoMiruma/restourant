import { IsInt, IsString } from "class-validator";

export class WaiterUpdateDto {
    @IsInt()
    waiterId: number

    @IsString()
    name: string

    @IsInt()
    age: number

    @IsString()
    bio: string

    @IsInt()
    reviewId: number
}