import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class WaiterDto {
    @ApiProperty({example: "John", description: "waiter name"})
    @IsString()
    name: string

    @ApiProperty({example: 19, description: "waiter age"})
    @IsInt()
    age: number

    @ApiProperty({example: "like potato and play volleyball", description: "waiter bio"})
    @IsString()
    bio: string

    @ApiProperty({example: 1, description: "feedback about the waiter"})
    @IsInt()
    reviewId: number
}