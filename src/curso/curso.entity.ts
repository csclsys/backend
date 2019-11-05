import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable } from 'typeorm';
import { DisciplinaEntity } from '../disciplina/disciplina.entity';

@Entity( { name: 'curso' } )
export class CursoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany( type => DisciplinaEntity )
  @JoinTable( { name: 'cursoDisciplina' } )
  disiciplinas: DisciplinaEntity[];

  @Column( {
    type: 'text',
  } )
  nome: string;
}
