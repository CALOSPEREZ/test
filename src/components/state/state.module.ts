import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StateRepository } from 'src/repositories/state.repository';
import { State, StateSchema } from './schema/state.schema';
import { StateController } from './state.controller';
import { StateService } from './state.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: State.name, schema: StateSchema }]),
  ],
  providers: [
    {
      provide: 'StateRepositoryInterface',
      useClass: StateRepository,
    },
    {
      provide: 'stateServiceInterface',
      useClass: StateService,
    },
  ],
  controllers: [StateController],
  exports: [
    {
      provide: 'stateServiceInterface',
      useClass: StateService,
    },
  ],
})
export class StateModule {}
