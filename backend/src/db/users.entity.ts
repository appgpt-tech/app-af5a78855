//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class usersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  UserID: number;

  @Column('text', { nullable: true })
  Username: string;

  @Column('text', { nullable: true })
  Email: string;

  @Column('text', { nullable: true })
  Password: string;

  @Column('text', { nullable: true })
  FullName: string;

  @Column('date', { nullable: true })
  RegistrationDate: Date;

  @Column('date', { nullable: true })
  LastLoginDate: Date;

  @Column('text', { nullable: true })
  AccountStatus: string;
}
