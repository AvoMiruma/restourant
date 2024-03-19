import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { sign } from 'jsonwebtoken';
import { RegistrationDto } from './dto/registration.dto';

@Injectable()
export class AuthService {
    constructor (private readonly databaseService: DatabaseService) {}

    async authenticate(dto: AuthenticateDto) {
        const user = await this.databaseService.user.findUnique({
            where: {
                email: dto.email,
                password: dto.password
            },
            include: {
                roles: true
            }
        });

        if(!user) throw new NotFoundException("Invalid credentials");

        const token = sign({...user}, 'secrete');
        return {token, user}
    }

    async registration(dto: RegistrationDto) {
        const checkUser = await this.databaseService.user.findUnique({
            where: {
                email: dto.email
            }
        });

        if(checkUser) throw new BadRequestException("Invalid credentials");

        const user = await this.databaseService.user.create({
            data: dto
        });
        const token = sign({...user}, 'secrete');
        return {token, user}
    }
}
