import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { RoleUpdateDto } from './dto/roleUpdate.dto';
import { RoleDeleteDto } from './dto/roleDelete.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('get')
  getAll() {
    return this.roleService.getAll();
  }

  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.getRoleById(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() roleDto: RoleDto) {
    return this.roleService.create(roleDto)
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: RoleUpdateDto) {
    return this.roleService.update(dto);
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: RoleDeleteDto) {
    return this.roleService.delete(dto);
  }
}
