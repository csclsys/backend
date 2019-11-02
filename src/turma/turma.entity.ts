import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity('turma')
export class TurmaEntity {

  @ManyToMany(type => UsuarioEntity)
  @JoinColumn( { name: 'usuario_id' } )
  role?: UsuarioEntity;

  @PrimaryGeneratedColumn('increment')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
  })
  nome: string;

  @Column({
    type: 'text',
  })
  semestre: string;

  @Column({
    type: 'text',
    unique: true,
  })
  ano: string;

}
