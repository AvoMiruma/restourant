import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { WaiterModule } from './waiter/waiter.module';
import { MenuModule } from './menu/menu.module';
import { DishModule } from './dish/dish.module';
import { ReviewModule } from './review/review.module';
import { RatingModule } from './rating/rating.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    RoleModule,
    UserModule,
    WaiterModule, 
    ReviewModule, 
    MenuModule, 
    DishModule, 
    RatingModule, 
    AuthModule,
    JwtModule.register({secret: 'secrete', signOptions: {expiresIn: '1h'}}),
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
