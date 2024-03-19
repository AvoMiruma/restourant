import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { RegistrationDto } from './dto/registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    
  @Post('authenticate')
  @UsePipes(new ValidationPipe())
  authenticate(@Body() dto: AuthenticateDto) {
    return this.authService.authenticate(dto);
  }

  @Post('registration')
  @UsePipes(new ValidationPipe())
  registration(@Body() dto: RegistrationDto) {
    return this.authService.registration(dto);
  }
}
