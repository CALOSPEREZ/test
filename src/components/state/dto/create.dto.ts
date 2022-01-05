import { IsString } from 'class-validator';
export class CreateDto {
  @IsString()
  state: string;

  @IsString()
  capital: string;
}
