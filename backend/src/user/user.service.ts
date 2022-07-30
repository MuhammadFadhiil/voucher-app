import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findUSer(email: string): Promise<any> {
    try {
      const user = await this.userRepository.findOneBy({ email: email });
      if (!user) {
        return { success: false };
      }
      return { success: true, data: user };
    } catch (e) {
      return { success: false };
    }
  }
}
