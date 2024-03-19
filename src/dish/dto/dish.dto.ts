import { IsInt, IsString } from "class-validator";

export class DishDto {
    @IsString()
    name: string

    @IsString()
    component: string
    
    @IsInt()
    price: number

    @IsInt()
    menuId: number
}