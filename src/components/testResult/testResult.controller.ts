import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Res,
  Request,
  UseGuards,
} from '@nestjs/common';
import { handleResponse } from 'src/common/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateDto } from './dto/create.dto';
import { TestResultServiceInterface } from './interface/testResult.service.interface';
import { TestResult } from './schema/testResult.schema';

@Controller('TestResult')
export class TestResultController {
  constructor(
    @Inject('testResultServiceInterface')
    private readonly TestResultService: TestResultServiceInterface,
  ) {}
  @Get()
  public async findAll(@Res() res): Promise<TestResult[]> {
    const data = await this.TestResultService.findAll();
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @Get(':id')
  public async first(@Param('id') id: string, @Res() res) {
    const data = await this.TestResultService.findById(id);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  public async create(
    @Body() userDto: CreateDto,
    @Request() req,
    @Res() res,
  ): Promise<{ message: string; data: CreateDto }> {
    const data = await this.TestResultService.create(userDto, req.user.id);
    return handleResponse(res, HttpStatus.CREATED, 'ok', data);
  }
  @Delete(':id')
  public async delete(@Param('id') id: string, @Res() res) {
    const data = await this.TestResultService.delete(id);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @Post('login')
  public async login(@Body('email') email) {
    const t = await this.TestResultService.findByCondition(email);
    return t;
  }
}
