import { IsInt, IsString } from "class-validator";

export class DishUpdateDto {
    @IsInt()
    id: number

    @IsString()
    name: string

    @IsString()
    component: string
    
    @IsInt()
    price: number

    @IsInt()
    menuId: number

    @IsInt()
    ratingId: number
}