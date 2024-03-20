import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UserDeleteDto {
    @ApiProperty({example: "user@gmail.com", description: "user email"})
    @IsString()
    @IsEmail()
    email: string
}