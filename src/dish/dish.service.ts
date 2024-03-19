import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DishDto } from './dto/dish.dto';
import { DishUpdateDto } from './dto/dishUpdate.dto';
import { DishDeleteDto } from './dto/dishDelete.dto';

@Injectable()
export class DishService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const dish = await this.databaseService.dish.findMany({
            include: {
                menu: true,
                rating: true,
            }
        })
        return dish;
    }

    async getById(id: number) {
        const dish = await this.databaseService.dish.findUnique({
            where: {
                id: id
            },
            include: {
                rating: true,
                menu: true,
            }
        });

        return dish;
    }

    async create(dto: DishDto) {
        const dish = await this.databaseService.dish.create({
            data: dto
        });

        return dish;
    }

    async update(dto: DishUpdateDto) {
        const dish = await this.databaseService.dish.update({
            where: {
                id: dto.id
            },
            data: {
                name: dto.name,
                component: dto.component,
                price: dto.price,
                menuId: dto.menuId,
                rating: {
                    set: {
                        id: dto.ratingId
                    }
                }
            }
        });

        return dish;
    }

    async delete(dto: DishDeleteDto) {
        const dish = await this.databaseService.dish.delete({
            where: {
                id: dto.id
            }
        });

        return dish;
    }
}
