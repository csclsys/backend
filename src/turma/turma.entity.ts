import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { DisciplinaEntity } from 'src/disciplina/disciplina.entity';

@Entity( 'turma' )
export class TurmaEntity {

  @ManyToMany( type => UsuarioEntity )
  @JoinTable( { name: 'turmaUsuarioMonitor' } )
  monitores: UsuarioEntity[];

  @ManyToMany( type => UsuarioEntity )
  @JoinTable( { name: 'turmaUsuarioAlunos' } )
  alunos: UsuarioEntity[];

  @ManyToOne( type => UsuarioEntity )
  professor: UsuarioEntity;

  @ManyToOne( type => DisciplinaEntity )
  disciplina: DisciplinaEntity;

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column( {
    type: 'text',
  } )
  nome: string;

  @Column( {
    type: 'text',
  } )
  semestre: string;

  @Column( {
    type: 'text',
    unique: true,
  } )
  ano: string;

}
