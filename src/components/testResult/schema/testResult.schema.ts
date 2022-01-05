import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export type TestResultDocument = TestResult & mongoose.Document;

@Schema()
export class TestResult {
  @Prop()
  TestDateTime: number;
  @Prop()
  NumberCorrect: number;
  @Prop()
  TotalQuestions: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: string;
}

export const TestResultSchema = SchemaFactory.createForClass(TestResult);
