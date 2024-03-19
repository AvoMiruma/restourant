import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';
import { ReviewUpdateDto } from './dto/reviewUpdate.dto';
import { ReviewDeleteDto } from './dto/reviewDelete.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('get')
  getAll() {
    return this.reviewService.getAll();
  }

  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.getById(id);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: ReviewDto) {
    return this.reviewService.create(dto);
  }

  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: ReviewUpdateDto) {
    return this.reviewService.update(dto);
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: ReviewDeleteDto) {
    return this.reviewService.delete(dto);
  }
}
