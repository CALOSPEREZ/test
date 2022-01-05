import { IsArray, IsEmpty, IsNumber } from 'class-validator';

export class CreateDto {
  @IsNumber()
  TestDateTime: number;
  @IsArray()
  question: any;
}
