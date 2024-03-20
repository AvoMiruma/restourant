import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class DishDto {
    @ApiProperty({example: "Potato", description: "Name of dish"})
    @IsString()
    name: string

    @ApiProperty({example: "potato, salt", description: "component of dish"})
    @IsString()
    component: string
    
    @ApiProperty({example: 11, description: "dish price"})
    @IsInt()
    price: number

    @ApiProperty({example: 1, description: "menu where this dish is available"})
    @IsInt()
    menuId: number
}