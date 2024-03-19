import { IsInt, IsString } from "class-validator";

export class WaiterDto {
    @IsString()
    name: string

    @IsInt()
    age: number

    @IsString()
    bio: string

    @IsInt()
    reviewId: number
}