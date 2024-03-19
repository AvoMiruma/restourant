import { IsEmail, IsInt, IsString } from "class-validator";

export class UserUpdateDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsInt()
    rolesId: number
}