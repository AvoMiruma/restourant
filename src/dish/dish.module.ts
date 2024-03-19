import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [DishController],
  providers: [DishService],
  imports: [DatabaseModule]
})
export class DishModule {}
