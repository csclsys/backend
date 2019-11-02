import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('curso')
export class CursoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'text',
  })
  nome: string;
}
