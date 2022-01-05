import { Inject, Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { StateRepositoryInterface } from './interface/state.repository.interface';
import { State } from './schema/state.schema';
@Injectable()
export class StateService {
  constructor(
    @Inject('StateRepositoryInterface')
    private readonly stateRepository: StateRepositoryInterface,
  ) {}
  public async create(userDto: CreateDto): Promise<State> {
    return await this.stateRepository.create(userDto);
  }
  public async findAll(): Promise<State[]> {
    return this.stateRepository.findAll();
  }
  public async update(userDto: UpdateDto, id: string): Promise<State> {
    return this.stateRepository.update(userDto, { _id: id });
  }
  public async findByCondition(condition: string): Promise<State> {
    return await this.stateRepository.findByCondition(condition);
  }
  public async delete(id: string): Promise<State> {
    return this.stateRepository.delete(id);
  }
  public async findByConditionRelationAgregate(
    relation: any,
  ): Promise<State[]> {
    return this.stateRepository.findByConditionRelationAgregate(relation);
  }
}
