import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
  imports: [DatabaseModule]
})
export class RatingModule {}
