import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity( 'disciplina' )
export class DisciplinaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( {
    type: 'text',
  } )
  nome: string;
}
