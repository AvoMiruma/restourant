import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { sign } from 'jsonwebtoken';
import { RegistrationDto } from './dto/registration.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor (private readonly databaseService: DatabaseService) {}

    async authenticate(dto: AuthenticateDto) {
        const user = await this.databaseService.user.findUnique({
            where: {
                email: dto.email,
            },
            include: {
                roles: true
            }
        });

        const isMatch = await bcrypt.compare(dto.password, user.password)
        if(!isMatch) throw new UnauthorizedException("Invalid credentials")

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
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.databaseService.user.create({
            data: {
                ...dto,
                password: hashPassword
            }
        });
        const token = sign({...user}, 'secrete');
        return {token, user}
    }
}
