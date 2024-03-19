import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { WaiterDto } from './dto/waiter.dto';
import { WaiterUpdateDto } from './dto/waiterUpdate.dto';
import { WaiterDeleteDto } from './dto/waiterDelete.dto';

@Injectable()
export class WaiterService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const waiter = await this.databaseService.waiter.findMany({
            include: {
                review: true
            }
        });

        return waiter;
    }

    async getById(id: number) {
        const waiter = await this.databaseService.waiter.findUnique({
            where: {
                id: id
            },
            include: {
                review: true
            }
        });

        return waiter;
    }

    async create(dto: WaiterDto) {
        const waiter = await this.databaseService.waiter.create({
            data: {
                name: dto.name,
                age: dto.age,
                bio: dto.bio,
                review : {
                    connect: {
                        id: dto.reviewId
                    }
                }
            }
        });

        return waiter;
    }

    async update(dto: WaiterUpdateDto) {
        const waiter = await this.databaseService.waiter.update({
            where: {
                id: dto.waiterId
            },
            data: {
                name: dto.name,
                age: dto.age,
                bio: dto.bio,
                review: {
                    set: {
                        id: dto.reviewId
                    }
                }
            }
        });

        return waiter;
    }

    async delete(dto: WaiterDeleteDto) {
        const waiter = await this.databaseService.waiter.delete({
            where: {
                id: dto.waiterId
            }
        });

        return waiter;
    }
}
