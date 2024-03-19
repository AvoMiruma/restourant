import { Body, Controller, Delete, Get, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { WaiterService } from './waiter.service';
import { WaiterDto } from './dto/waiter.dto';
import { WaiterUpdateDto } from './dto/waiterUpdate.dto';
import { WaiterDeleteDto } from './dto/waiterDelete.dto';

@Controller('waiter')
export class WaiterController {
  constructor(private readonly waiterService: WaiterService) {}

  @Get('get')
  getAll() {
    return this.waiterService.getAll();
  }

  @Get('get/:id')
  getById(id: number) {
    return this.waiterService.getById(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: WaiterDto) {
    return this.waiterService.create(dto);
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: WaiterUpdateDto) {
    return this.waiterService.update(dto);
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: WaiterDeleteDto) {
    return this.waiterService.delete(dto);
  }
}
