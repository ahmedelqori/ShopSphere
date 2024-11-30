import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/user.dto';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  /**
   * Creates an instance of UserService.
   *
   * @constructor
   * @param {Repository<UserEntity>} userRepository
   */
  constructor(
    @InjectRepository(UserEntity)
    protected userRepository: Repository<UserEntity>,
  ) {}

  /**
   * @description get all users with all data
   *
   * @async
   * @param {void}
   * @returns {(Promise<User[]> | null)}
   */
  async findAll(): Promise<User[]> | null {
    return await this.userRepository.find();
  }

  /**
   * @description Find user by id
   *
   * @async
   * @param {string} email
   * @returns {(Promise<UserEntity> | null)}
   */
  async findUserByEmail(email: string): Promise<UserEntity> | null {
    return await this.userRepository.findOneBy({ email });
  }

  async findUserAndUpdate(payload: object, updatedata: object) {
    await this.userRepository.update(payload, updatedata);
  }

  async findUserAndDeleteRefreshToken(email: string) {
    await this.userRepository.update({ email }, { refreshToken: null });
  }

  /**
   * @description Create User
   *
   * @async
   * @param {CreateUser} userData
   * @returns {(Promise<UserEntity> | null)}
   */
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
