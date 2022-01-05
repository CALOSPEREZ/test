import { Inject, Injectable } from '@nestjs/common';
import { StateServiceInterface } from '../state/interface/state.service.interface';
import { CreateDto } from './dto/create.dto';
import { TestResultRepositoryInterface } from './interface/testResult.repository.interface';
import { TestResult } from './schema/testResult.schema';
@Injectable()
export class TestResultService {
  constructor(
    @Inject('testResultRepositoryInterface')
    private readonly TestResultRepository: TestResultRepositoryInterface,
    @Inject('stateServiceInterface')
    private readonly stateService: StateServiceInterface,
  ) {}
  public async create(Dto: CreateDto, id: string): Promise<TestResult> {
    let result;
    let NumberCorrect = 0;
    Dto.question.forEach((element) => {
      result = this.stateService.findByCondition({
        state: element['state'],
        capital: element['Denver'],
      });
      if (result) NumberCorrect++;
    });
    const objet = {
      TotalQuestions: Dto.question.length,
      NumberCorrect: NumberCorrect,
      TestDateTime: Dto.TestDateTime,
      user_id: id,
    };
    return await this.TestResultRepository.create(objet);
  }
  public async findAll(): Promise<TestResult[]> {
    return this.TestResultRepository.findAll();
  }
  public async findById(id: string): Promise<TestResult> {
    return this.TestResultRepository.findById(id);
  }
}
