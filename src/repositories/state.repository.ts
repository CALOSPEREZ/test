import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StateRepositoryInterface } from 'src/components/state/interface/state.repository.interface';
import { State } from 'src/components/State/schema/state.schema';

@Injectable()
export class StateRepository
  extends BaseAbstractRepository<State>
  implements StateRepositoryInterface
{
  constructor(
    @InjectModel(State.name) private readonly stateRepository: Model<State>,
  ) {
    super(stateRepository);
  }
}
