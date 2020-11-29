import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  userCreator(@Body() userDto: CreateUserDto) {
    const token = this.userService.createToken(userDto);

    return {
      id: userDto.id,
      token: token,
      language: userDto.language,
    };
  }
}
