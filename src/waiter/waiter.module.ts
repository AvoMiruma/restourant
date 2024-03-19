import { Module } from '@nestjs/common';
import { WaiterService } from './waiter.service';
import { WaiterController } from './waiter.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [WaiterController],
  providers: [WaiterService],
  imports: [DatabaseModule]
})
export class WaiterModule {}
