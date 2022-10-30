import * as bcrypt from 'bcryptjs';
import { IsEmail } from 'class-validator';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IUser } from './user.interface';

@Entity('user')
export class EUser implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  // @Column({ default: '' })
  // bio: string;

  // @Column({ default: '' })
  // image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  // @ManyToMany(() => ArticleEntity)
  // @JoinTable()
  // favorites: ArticleEntity[];

  // @OneToMany(() => ArticleEntity, (article) => article.author)
  // articles: ArticleEntity[];
}
