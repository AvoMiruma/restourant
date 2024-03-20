import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class DishUpdateDto {
    @ApiProperty({example: 1, description: "dish id"})
    @IsInt()
    id: number

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

    @ApiProperty({example: 1, description: "rating of dish"})
    @IsInt()
    ratingId: number
}