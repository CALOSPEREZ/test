import { CreateDto } from '../dto/create.dto';
import { State } from '../schema/state.schema';

export interface StateServiceInterface {
  create(UserDto: CreateDto): Promise<State>;

  findAll(): Promise<State[]>;

  update(data: State, condition: any): Promise<State>;

  findByCondition(filterCondition: any): Promise<State>;

  findByConditionRelationAgregate(relation: any): Promise<State[]>;

  delete(id: string): Promise<State>;
}
