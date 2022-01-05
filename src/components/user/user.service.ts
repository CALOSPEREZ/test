import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { encryption } from 'src/common/encryption';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UsereRepositoryInterface } from './interface/user.repository.interface';
import { User } from './schema/user.schema';
@Injectable()
export class UserService {
  constructor(
    @Inject('userRepositoryInterface')
    private readonly userRepository: UsereRepositoryInterface,
  ) {}
  public async create(userDto: CreateUserDto): Promise<User> {
    userDto.password = await encryption(userDto.password);
    return await this.userRepository.create(userDto);
  }
  public async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  public async update(userDto: UpdateUserDto, id: string): Promise<User> {
    if (userDto.password) userDto.password = await encryption(userDto.password);
    return this.userRepository.update(userDto, { _id: id });
  }
  public async findByCondition(name: string): Promise<User> {
    return await this.userRepository.findByCondition({ name: name });
  }
  public async delete(id: string): Promise<User> {
    return this.userRepository.delete(id);
  }
}
