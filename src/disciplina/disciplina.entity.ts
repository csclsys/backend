import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('disciplina')
export class DisciplinaEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'text',
  })
  nome: string;
}
