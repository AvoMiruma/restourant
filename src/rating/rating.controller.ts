import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingDto } from './dto/rating.dto';
import { RatingUpdateDto } from './dto/ratingUpdate.dto';
import { RatingDeleteDto } from './dto/ratingDelete.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Rating-Controller')
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @ApiOperation({summary: 'Get all ratings'})
  @ApiResponse({status: 200, type: [RatingDto]})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @Get('get')
  getAll() {
    return this.ratingService.getAll();
  }

  @ApiOperation({summary: 'Get rating by id'})
  @ApiResponse({status: 200, type: RatingDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.ratingService.getById(id);
  }

  @ApiOperation({summary: 'Create new rating'})
  @ApiResponse({status: 200, type: RatingDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: RatingDto) {
    return this.ratingService.create(dto);
  }

  @ApiOperation({summary: 'Update rating'})
  @ApiResponse({status: 200, type: RatingDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: RatingUpdateDto) {
    return this.ratingService.update(dto);
  }

  @ApiOperation({summary: 'Delete rating'})
  @ApiResponse({status: 200, type: RatingDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: RatingDeleteDto) {
    return this.ratingService.delete(dto);
  }
}
