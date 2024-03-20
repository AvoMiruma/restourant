import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { UserDeleteDto } from './dto/userDelete.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const users = await this.databaseService.user.findMany({
            include: {
                roles: true
            }
        });


        return users;
    }

    async getById(id: number) {
        const user = await this.databaseService.user.findUnique({
            where: {
                id: id
            },
            include: {
                roles: true
            }
        });

        return user;
    }

    async create(dto: UserDto) {
        const user = await this.databaseService.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: dto.password,
                roles: {connect: {id: dto.rolesId}}
            }
        });

        return user;
    }

    async update(dto: UserUpdateDto) {
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.databaseService.user.update({
            where: {
                email: dto.email
            },
            data: {
                name: dto.name,
                password: hashPassword,
                roles: {
                    set: {
                        id: dto.rolesId
                    }
                }
            }
        });

        return user;
    }

    async delete(dto: UserDeleteDto) {
        const user = await this.databaseService.user.delete({
            where: {
                email: dto.email
            }
        });

        return user;
    }
}
