import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity( { name: 'curso' } )
export class CursoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( {
    type: 'text',
  } )
  nome: string;
}
