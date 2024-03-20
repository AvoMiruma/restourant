import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { UserDeleteDto } from './dto/userDelete.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User-Controller')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [UserDto]})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({summary: 'Get user by id'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }

  @ApiOperation({summary: 'Create new user'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @ApiOperation({summary: 'Update user'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: UserUpdateDto) {
    return this.userService.update(dto);
  }

  @ApiOperation({summary: 'Delete user'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: UserDeleteDto) {
    return this.userService.delete(dto);
  }
}
