import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':email')
  async checkUser(@Param('email') email: string): Promise<any> {
    const result = await this.userService.findUSer(email);
    return result;
  }
}
