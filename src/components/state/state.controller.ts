import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { handleResponse } from 'src/common/response';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { StateServiceInterface } from './interface/state.service.interface';
import { State } from './schema/state.schema';

@Controller('state')
export class StateController {
  constructor(
    @Inject('stateServiceInterface')
    private readonly stateService: StateServiceInterface,
  ) {}
  @Get()
  public async findAll(@Res() res): Promise<State[]> {
    const data = await this.stateService.findByConditionRelationAgregate([
      { $sample: { size: 10 } },
    ]);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @Post()
  public async create(
    @Body() userDto: CreateDto,
    @Res() res,
  ): Promise<{ message: string; data: CreateDto }> {
    const data = await this.stateService.create(userDto);
    return handleResponse(res, HttpStatus.CREATED, 'ok', data);
  }
  @Put(':id')
  public async update(
    @Body() Dto: UpdateDto,
    @Param('id') id: string,
    @Res() res,
  ): Promise<State> {
    const data = await this.stateService.update(Dto, id);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @Delete(':id')
  public async delete(@Param('id') id: string, @Res() res) {
    const data = await this.stateService.delete(id);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
}
