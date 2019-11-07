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
import { MatriculaAlunoEntity } from 'src/matricula-aluno/matricula-aluno.entity';
import { MatriculaMonitorEntity } from 'src/matricula-monitor/matricula-monitor.entity';

@Entity( 'turma' )
export class TurmaEntity {

  @OneToMany( type => MatriculaAlunoEntity, matricula => matricula.usuario )
  matriculasAlunos: MatriculaAlunoEntity[];

  @OneToMany( type => MatriculaMonitorEntity, matricula => matricula.usuario )
  matriculasMonitor: MatriculaMonitorEntity[];

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
  } )
  ano: string;

  @Column( {
    type: 'integer',
  } )
  professorId: number;

  @Column( {
    type: 'integer',
  } )
  disciplinaId: number;

}
