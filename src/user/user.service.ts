import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  createToken(userDto: CreateUserDto) {
    return createHash('md5')
      .update(userDto.id)
      .update(userDto.hash)
      .update(process.env.TOKEN_SECRET_KEY)
      .digest('hex');
  }
}
