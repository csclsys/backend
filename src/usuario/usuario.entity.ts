import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TurmaEntity } from 'src/turma/turma.entity';

@Entity( 'usuario' )
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany( type => TurmaEntity )
  turmasMonitor: TurmaEntity[];

  @ManyToMany( type => TurmaEntity )
  turmasAluno: TurmaEntity[];

  @OneToMany( type => TurmaEntity, turma => turma.professor )
  turmasProfessor: UsuarioEntity[];

  @CreateDateColumn()
  created: Date;

  @Column( {
    type: 'text',
  } )
  nome: string;

  @Column( {
    type: 'text',
  } )
  sobrenome: string;

  @Column( {
    type: 'text',
    unique: true,
  } )
  cpf: string;

  @Column( {
    type: 'text',
    unique: true,
  } )
  matricula: string;

  @Column( {
    type: 'text',
  } )
  papel: string;
}
