import { IsEmail, IsString } from "class-validator";

export class RegistrationDto {
    @IsEmail()
    @IsString()
    email: string

    @IsString()
    password: string

    @IsString()
    name: string
}