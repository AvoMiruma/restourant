import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RatingDto } from './dto/rating.dto';
import { RatingUpdateDto } from './dto/ratingUpdate.dto';
import { RatingDeleteDto } from './dto/ratingDelete.dto';

@Injectable()
export class RatingService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const ratings = await this.databaseService.rating.findMany({
            include: {
                dish: true,
                review: true,
            }
        });

        return ratings;
    }

    async getById(id: number) {
        const rating = await this.databaseService.rating.findUnique({
            where: {
                id: id
            },
            include: {
                dish: true,
                review: true,
            }
        });

        return rating;
    }

    async create(dto: RatingDto) {
        const rating = await this.databaseService.rating.create({
            data: dto
        });

        return rating;
    }

    async update(dto: RatingUpdateDto) {
        const rating = await this.databaseService.rating.update({
            where: {
                id: dto.id
            },
            data: {
                name: dto.name
            }
        });

        return rating;
    }

    async delete(dto: RatingDeleteDto) {
        const rating = await this.databaseService.rating.delete({
            where: {
                id: dto.id
            }
        });

        return rating;
    }
}
