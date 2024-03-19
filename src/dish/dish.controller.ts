import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishDto } from './dto/dish.dto';
import { DishUpdateDto } from './dto/dishUpdate.dto';
import { DishDeleteDto } from './dto/dishDelete.dto';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get('get')
  getAll() {
    return this.dishService.getAll();
  }

  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.dishService.getById(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: DishDto) {
    return this.dishService.create(dto);
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: DishUpdateDto) {
    return this.dishService.update(dto);
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: DishDeleteDto) {
    return this.dishService.delete(dto);
  }
}
