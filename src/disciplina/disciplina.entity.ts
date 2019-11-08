import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CursoEntity } from 'src/curso/curso.entity';
import { TurmaEntity } from 'src/turma/turma.entity';
import { TemaEntity } from 'src/tema/tema.entity';

@Entity( 'disciplina' )
export class DisciplinaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany( type => CursoEntity )
  cursos: CursoEntity[];

  @OneToMany( type => TurmaEntity, turma => turma.disciplina )
  turmas: TurmaEntity[];

  @OneToMany( type => TemaEntity, tema => tema.disciplina )
  temas: TemaEntity[];

  @Column( {
    type: 'text',
  } )
  nome: string;
}
