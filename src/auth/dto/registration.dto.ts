import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class RegistrationDto {
    @ApiProperty({example: "user@gmail.com", description: "user email"})
    @IsEmail()
    @IsString()
    email: string

    @ApiProperty({example: "12345", description: "user password"})
    @IsString()
    password: string

    @ApiProperty({example: "John", description: "user name"})
    @IsString()
    name: string
}