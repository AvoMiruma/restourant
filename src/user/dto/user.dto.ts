import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsString } from "class-validator";

export class UserDto {
    @ApiProperty({example: "John", description: "user name"})
    @IsString()
    name: string

    @ApiProperty({example: "user@gmail.com", description: "user email"})
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty({example: "12345", description: "user password"})
    @IsString()
    password: string

    @ApiProperty({example: 1, description: "user role"})
    @IsInt()
    rolesId: number
}