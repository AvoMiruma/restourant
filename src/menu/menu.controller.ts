import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './dto/menu.dto';
import { MenuUpdateDto } from './dto/menuUpdate.dto';
import { MenuDeleteDto } from './dto/menuDelete.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('get')
  getAll() {
    return this.menuService.getAll();
  }

  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.getById(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: MenuDto) {
    return this.menuService.create(dto);
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: MenuUpdateDto) {
    return this.menuService.update(dto);
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: MenuDeleteDto) {
    return this.menuService.delete(dto)
  }
}
