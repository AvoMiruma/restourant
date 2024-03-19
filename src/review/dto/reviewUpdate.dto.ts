import { IsInt, IsString } from "class-validator";

export class ReviewUpdateDto {
    @IsInt()
    id: number

    @IsString()
    description: string | null
}