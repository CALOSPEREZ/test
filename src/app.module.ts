import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './components/auth/auth.module';
import { StateModule } from './components/state/state.module';
import { TestResultModule } from './components/testResult/testResult.module';
import { UserModule } from './components/user/user.module';
import { Mongo } from './config/mongodb/mongo.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: true,
    }),
    Mongo,
    UserModule,
    AuthModule,
    StateModule,
    TestResultModule,
  ],
})
export class AppModule {}
