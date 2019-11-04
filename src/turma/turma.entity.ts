import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne
} from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Entity( 'turma' )
export class TurmaEntity {

  @ManyToMany( type => UsuarioEntity )
  @JoinTable( { name: 'turma_usuario_monitor' } )
  monitores: UsuarioEntity[];

  @ManyToMany( type => UsuarioEntity )
  @JoinTable( { name: 'turma_usuario_alunos' } )
  alunos: UsuarioEntity[];

  @ManyToOne( type => UsuarioEntity )
  professor: UsuarioEntity;

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
