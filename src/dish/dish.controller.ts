import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishDto } from './dto/dish.dto';
import { DishUpdateDto } from './dto/dishUpdate.dto';
import { DishDeleteDto } from './dto/dishDelete.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Dish-Controller')
@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @ApiOperation({summary: 'Get all dishes'})
  @ApiResponse({status: 200, type: [DishDto]})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.dishService.getAll();
  }

  @ApiOperation({summary: 'Get dish by id'})
  @ApiResponse({status: 200, type: DishDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.dishService.getById(id);
  }

  @ApiOperation({summary: 'Create new dish'})
  @ApiResponse({status: 200, type: DishDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: DishDto) {
    return this.dishService.create(dto);
  }

  @ApiOperation({summary: 'Update dish'})
  @ApiResponse({status: 200, type: DishDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: DishUpdateDto) {
    return this.dishService.update(dto);
  }

  @ApiOperation({summary: 'Delete dish'})
  @ApiResponse({status: 200, type: DishDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: DishDeleteDto) {
    return this.dishService.delete(dto);
  }
}
