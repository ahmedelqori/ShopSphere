import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUser } from './dto/CreateUser.dto';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> | null {
    return await this.userRepository.find();
  }

  async create(userData: CreateUser): Promise<User> {
    try {
      const findUser = await this.userRepository.findOneBy({
        email: userData.email,
      });
      if (findUser) {
        throw new GraphQLError('This email already used', {
          extensions: { code: '409' },
        });
      }
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = this.userRepository.create({
        email: userData.email,
        password: hashedPassword,
      });
      await this.userRepository.save(newUser);
      return newUser;
    } catch (err) {
      throw new GraphQLError(err.message, {
        extensions: { code: err.extensions.code },
      });
    }
  }
}
