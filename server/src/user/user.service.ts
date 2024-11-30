import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/user.dto';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    protected userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> | null {
    return await this.userRepository.find();
  }

  async findUserByEmail(email: string): Promise<UserEntity> | null {
    return await this.userRepository.findOneBy({ email });
  }

  async createUser(userData: CreateUser): Promise<UserEntity> | null {
    try {
      const newUser = this.userRepository.create({
        email: userData.email,
        password: userData.password,
      });
      await this.userRepository.save(newUser);
      return newUser;
    } catch (err) {
      throw new GraphQLError(err.message, {
        extensions: { code: err?.extensions?.code },
      });
    }
  }
}
