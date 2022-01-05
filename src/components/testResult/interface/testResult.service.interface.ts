import { CreateDto } from '../dto/create.dto';
import { TestResult } from '../schema/testResult.schema';

export interface TestResultServiceInterface {
  create(UserDto: CreateDto, id: string): Promise<TestResult>;

  findAll(): Promise<TestResult[]>;

  findById(id: string): Promise<TestResult>;

  update(data: TestResult, condition: any): Promise<TestResult>;

  findByCondition(filterCondition: any): Promise<TestResult>;

  findByConditionRelation(
    filterCondition: any,
    relation: string,
  ): Promise<TestResult>;

  findByConditionRelationAgregate(relation: any): Promise<TestResult[]>;

  delete(id: string): Promise<TestResult>;
}
