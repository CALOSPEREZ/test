import { IsString } from 'class-validator';
export class UpdateDto {
  @IsString()
  state: string;

  @IsString()
  capital: string;
}
