import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingDto } from './dto/rating.dto';
import { RatingUpdateDto } from './dto/ratingUpdate.dto';
import { RatingDeleteDto } from './dto/ratingDelete.dto';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get('get')
  getAll() {
    return this.ratingService.getAll();
  }

  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.ratingService.getById(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: RatingDto) {
    return this.ratingService.create(dto);
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: RatingUpdateDto) {
    return this.ratingService.update(dto);
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: RatingDeleteDto) {
    return this.ratingService.delete(dto);
  }
}
