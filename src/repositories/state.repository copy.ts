import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TestResultRepositoryInterface } from 'src/components/testResult/interface/testResult.repository.interface';
import { TestResult } from 'src/components/testResult/schema/testResult.schema';

@Injectable()
export class TestResultRepository
  extends BaseAbstractRepository<TestResult>
  implements TestResultRepositoryInterface
{
  constructor(
    @InjectModel(TestResult.name)
    private readonly TestResultRepository: Model<TestResult>,
  ) {
    super(TestResultRepository);
  }
}
