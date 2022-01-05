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
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserServiceInterface } from './interface/user.service.interface';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(
    @Inject('userServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}
  @Get()
  public async findAll(@Res() res): Promise<User[]> {
    const data = await this.userService.findAll();
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @Post()
  public async create(
    @Body() userDto: CreateUserDto,
    @Res() res,
  ): Promise<{ message: string; data: CreateUserDto }> {
    const data = await this.userService.create(userDto);
    return handleResponse(res, HttpStatus.CREATED, 'ok', data);
  }
  @Put(':id')
  public async update(
    @Body() userDto: UpdateUserDto,
    @Param('id') id: string,
    @Res() res,
  ): Promise<User> {
    const data = await this.userService.update(userDto, id);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
  @Delete(':id')
  public async delete(@Param('id') id: string, @Res() res) {
    const data = await this.userService.delete(id);
    return handleResponse(res, HttpStatus.ACCEPTED, 'ok', data);
  }
}
