import { IsEmail, IsString } from "class-validator";

export class UserDeleteDto {
    @IsString()
    @IsEmail()
    email: string
}