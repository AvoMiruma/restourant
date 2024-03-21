import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { RegistrationDto } from './dto/registration.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/*skdfjsdoaf*/ 
@ApiTags('Auth-Controller')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @ApiOperation({summary: 'user authenticate'})
  @ApiResponse({status: 200, type: AuthenticateDto})
  @Post('authenticate')
  @UsePipes(new ValidationPipe())
  authenticate(@Body() dto: AuthenticateDto) {
    return this.authService.authenticate(dto);
  }
  @ApiOperation({summary: 'user registration'})
  @ApiResponse({status: 200, type: RegistrationDto})
  @Post('registration')
  @UsePipes(new ValidationPipe())
  registration(@Body() dto: RegistrationDto) {
    return this.authService.registration(dto);
  }
}
