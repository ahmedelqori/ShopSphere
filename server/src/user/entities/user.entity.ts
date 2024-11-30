import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  displayName?: string;

  @Column({ nullable: true })
  username?: string;

  @Column({ nullable: true })
  fullName?: string;

  @Column({ nullable: true })
  secondaryEmail?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  zip?: number;

  @Column({ nullable: true })
  verifiedEmail?: boolean;

  @Column({ nullable: true })
  verifiedPhoneNumber?: boolean;

  @Column({ nullable: true, default: null })
  refreshToken?: string;
}
