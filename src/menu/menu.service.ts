import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { MenuDto } from './dto/menu.dto';
import { MenuUpdateDto } from './dto/menuUpdate.dto';
import { MenuDeleteDto } from './dto/menuDelete.dto';

@Injectable()
export class MenuService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const menu = await this.databaseService.menu.findMany({
            include: {
                dish: true
            }
        });

        return menu;
    }

    async getById(id: number) {
        const menu = await this.databaseService.menu.findUnique({
            where: {
                id: id
            },
            include: {
                dish: true,
            }
        });

        return menu;
    }

    async create(dto: MenuDto) {
        const menu = await this.databaseService.menu.create({
            data: dto
        });

        return menu;
    }

    async update(dto: MenuUpdateDto) {
        const menu = await this.databaseService.menu.update({
            where: {
                id: dto.id
            },
            data: {
                name: dto.name
            }
        });

        return menu;
    }

    async delete(dto: MenuDeleteDto) {
        const menu = await this.databaseService.menu.delete({
            where: {
                id: dto.id
            }
        });

        return menu;
    }
}
