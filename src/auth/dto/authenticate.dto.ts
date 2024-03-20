import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthenticateDto {
    @ApiProperty({example: "user@gmail.com", description: "user email"})
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string

    @ApiProperty({example: "12345", description: "user password"})
    @IsNotEmpty()
    @IsString()
    password: string
}