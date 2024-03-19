import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RoleDto } from './dto/role.dto';
import { RoleUpdateDto } from './dto/roleUpdate.dto';
import { RoleDeleteDto } from './dto/roleDelete.dto';

@Injectable()
export class RoleService {
    constructor (private readonly databaseService: DatabaseService) {}

    async getAll() {
        const roles = await this.databaseService.role.findMany({
            include: {
                users: true
            }
        });
        
        return roles;
    }

    async getRoleById(id: number) {
        const role = await this.databaseService.role.findUnique({
            where: {
                id: id
            },
            include: {
                users: true
            }
        });

        return role;
    }

    async create(roleDto: RoleDto) {
        const role = await this.databaseService.role.create({
            data: roleDto
        })

        return role;
    }

    async update(dto: RoleUpdateDto) {
        const role = await this.databaseService.role.update({
            where: {
                id: dto.roleId
            },
            data: {
                role: dto.role,
                description: dto.description
            }
        });

        return role;
    }
    
    async delete(dto: RoleDeleteDto) {
        const role = await this.databaseService.role.delete({
            where: {
                role: dto.role
            }
        })

        return role;
    }
}
