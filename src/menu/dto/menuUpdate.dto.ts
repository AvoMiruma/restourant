import { IsInt, IsString } from "class-validator";

export class MenuUpdateDto {
    @IsInt()
    id: number

    @IsString()
    name: string
}