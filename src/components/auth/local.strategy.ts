import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../user/schema/user.schema';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authService: AuthService) {
    super({ usernameField: 'name' });
  }

  async validate(name: string, password: string): Promise<User> {
    const user = await this._authService.autentification({ name, password });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
