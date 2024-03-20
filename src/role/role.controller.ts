import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { RoleUpdateDto } from './dto/roleUpdate.dto';
import { RoleDeleteDto } from './dto/roleDelete.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Role-Controller')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({summary: 'Get all roles'})
  @ApiResponse({status: 200, type: [RoleDto]})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.roleService.getAll();
  }

  @ApiOperation({summary: 'Get role by id'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.getRoleById(id);
  }

  @ApiOperation({summary: 'Create new role'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() roleDto: RoleDto) {
    return this.roleService.create(roleDto)
  }

  @ApiOperation({summary: 'Update role'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: RoleUpdateDto) {
    return this.roleService.update(dto);
  }

  @ApiOperation({summary: 'Delete role'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: RoleDeleteDto) {
    return this.roleService.delete(dto);
  }
}
