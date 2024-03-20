import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './dto/menu.dto';
import { MenuUpdateDto } from './dto/menuUpdate.dto';
import { MenuDeleteDto } from './dto/menuDelete.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Menu-Controller')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({summary: 'Get all menus'})
  @ApiResponse({status: 200, type: [MenuDto]})
  @Roles("USER")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.menuService.getAll();
  }

  @ApiOperation({summary: 'Get menu by id'})
  @ApiResponse({status: 200, type: MenuDto})
  @Roles("USER")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.getById(id);
  }

  @ApiOperation({summary: 'Create new menu'})
  @ApiResponse({status: 200, type: MenuDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: MenuDto) {
    return this.menuService.create(dto);
  }

  @ApiOperation({summary: 'Update menu'})
  @ApiResponse({status: 200, type: MenuDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: MenuUpdateDto) {
    return this.menuService.update(dto);
  }

  @ApiOperation({summary: 'Delete menu'})
  @ApiResponse({status: 200, type: MenuDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: MenuDeleteDto) {
    return this.menuService.delete(dto)
  }
}
