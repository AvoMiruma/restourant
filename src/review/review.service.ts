import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ReviewDto } from './dto/review.dto';
import { ReviewUpdateDto } from './dto/reviewUpdate.dto';
import { ReviewDeleteDto } from './dto/reviewDelete.dto';

@Injectable()
export class ReviewService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const review = await this.databaseService.review.findMany();
        return review;
    }

    async getById(id: number) {
        const review = await this.databaseService.review.findUnique({
            where: {id: id}
        });

        return review;
    }

    async create(dto: ReviewDto) {
        const review = await this.databaseService.review.create({
            data: dto
        });

        return review;
    }

    async update(dto: ReviewUpdateDto) {
        const review = await this.databaseService.review.update({
            where: {
                id: dto.id
            },
            data: {
                description: dto.description
            }
        });

        return review;
    }

    async delete(dto: ReviewDeleteDto) {
        const review = await this.databaseService.review.delete({
            where: {
                id: dto.id
            }
        });

        return review;
    }
}
