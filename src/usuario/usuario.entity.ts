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
import { TemaEntity } from 'src/tema/tema.entity';
import { SalaEntity } from 'src/sala/sala.entity';

@Entity( 'usuario' )
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany( type => TurmaEntity )
  turmasMonitor: TurmaEntity[];

  @ManyToMany( type => TurmaEntity )
  turmasAluno: TurmaEntity[];

  @OneToMany( type => TurmaEntity, turma => turma.professor )
  turmasProfessor: TurmaEntity[];

  @OneToMany( type => TemaEntity, tema => tema.proponente )
  temasProponente: TemaEntity[];

  @OneToMany( type => TemaEntity, tema => tema.aprovador )
  temasAprovador: TemaEntity[];

  @OneToMany( type => SalaEntity, sala => sala.usuario )
  salas: SalaEntity[];

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
