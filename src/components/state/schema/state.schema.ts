import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export type StateDocument = State & mongoose.Document;

@Schema()
export class State {
  @Prop()
  state: string;

  @Prop()
  capital: string;
}

export const StateSchema = SchemaFactory.createForClass(State);
