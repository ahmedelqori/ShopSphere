import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field({ nullable: true })
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @MinLength(8)
  @Column()
  password: string;
}
