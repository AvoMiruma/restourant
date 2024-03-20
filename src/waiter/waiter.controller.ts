import { Body, Controller, Delete, Get, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { WaiterService } from './waiter.service';
import { WaiterDto } from './dto/waiter.dto';
import { WaiterUpdateDto } from './dto/waiterUpdate.dto';
import { WaiterDeleteDto } from './dto/waiterDelete.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Waiter-Controller')
@Controller('waiter')
export class WaiterController {
  constructor(private readonly waiterService: WaiterService) {}

  @ApiOperation({summary: 'Get all waiters'})
  @ApiResponse({status: 200, type: [WaiterDto]})
  @Roles("USER")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.waiterService.getAll();
  }

  @ApiOperation({summary: 'Get waiter by id'})
  @ApiResponse({status: 200, type: WaiterDto})
  @Roles("USER")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(id: number) {
    return this.waiterService.getById(id);
  }

  @ApiOperation({summary: 'Create new waiter'})
  @ApiResponse({status: 200, type: WaiterDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: WaiterDto) {
    return this.waiterService.create(dto);
  }

  @ApiOperation({summary: 'Update waiter'})
  @ApiResponse({status: 200, type: WaiterDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: WaiterUpdateDto) {
    return this.waiterService.update(dto);
  }

  @ApiOperation({summary: 'Delete waiter'})
  @ApiResponse({status: 200, type: WaiterDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: WaiterDeleteDto) {
    return this.waiterService.delete(dto);
  }
}
