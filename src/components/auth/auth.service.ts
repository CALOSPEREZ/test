import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { isMatch } from 'src/common/encryption';
import { UserServiceInterface } from '../user/interface/user.service.interface';
import { User } from '../user/schema/user.schema';
import { AuthDto } from './dto/auth.dto';
@Injectable()
export class AuthService {
  constructor(
    @Inject('userServiceInterface')
    private readonly userService: UserServiceInterface,
    private jwtService: JwtService,
  ) {}
  public async autentification(data: AuthDto): Promise<User | null> {
    const user = await this.userService.findByCondition(data.name);
    if (!user) {
      throw new NotFoundException('user not exist');
    }
    const match = await isMatch(data.password, user.password);
    if (match) {
      return user;
    }
    throw null;
  }
  public async login(user: any) {
    const playload = {
      id: user._id.toString(),
      name: user.name,
    };
    return {
      access_token: this.jwtService.sign(playload),
    };
  }
}
