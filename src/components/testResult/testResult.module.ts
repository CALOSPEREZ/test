import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestResultRepository } from 'src/repositories/state.repository copy';
import { StateModule } from '../state/state.module';
import { TestResult, TestResultSchema } from './schema/testResult.schema';
import { TestResultController } from './testResult.controller';
import { TestResultService } from './testResult.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TestResult.name, schema: TestResultSchema },
    ]),
    StateModule,
  ],
  providers: [
    {
      provide: 'testResultRepositoryInterface',
      useClass: TestResultRepository,
    },
    {
      provide: 'testResultServiceInterface',
      useClass: TestResultService,
    },
  ],
  controllers: [TestResultController],
})
export class TestResultModule {}
