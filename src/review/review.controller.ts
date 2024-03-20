import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';
import { ReviewUpdateDto } from './dto/reviewUpdate.dto';
import { ReviewDeleteDto } from './dto/reviewDelete.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Review-Controller')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({summary: 'Get all reviews'})
  @ApiResponse({status: 200, type: [ReviewDto]})
  @Roles("USER", "ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.reviewService.getAll();
  }

  @ApiOperation({summary: 'Get review by id'})
  @ApiResponse({status: 200, type: ReviewDto})
  @Roles("USER", "ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.getById(id);
  }

  @ApiOperation({summary: 'Create new review'})
  @ApiResponse({status: 200, type: ReviewDto})
  @Roles("USER", "ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: ReviewDto) {
    return this.reviewService.create(dto);
  }

  @ApiOperation({summary: 'Update review'})
  @ApiResponse({status: 200, type: ReviewDto})
  @Roles("USER", "ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: ReviewUpdateDto) {
    return this.reviewService.update(dto);
  }

  @ApiOperation({summary: 'Delete review'})
  @ApiResponse({status: 200, type: ReviewDto})
  @Roles("USER", "ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: ReviewDeleteDto) {
    return this.reviewService.delete(dto);
  }
}
