import { CreateUserDto } from '../dto/create.user.dto';
import { User } from '../schema/user.schema';

export interface UserServiceInterface {
  create(UserDto: CreateUserDto): Promise<User>;

  findAll(): Promise<User[]>;

  update(data: User, condition: any): Promise<User>;

  findByCondition(filterCondition: any): Promise<User>;

  delete(id: string): Promise<User>;
}
