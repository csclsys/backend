import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
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
  sobrenome: string;

  @Column({
    type: 'text',
    unique: true,
  })
  cpf: string;

  @Column({
    type: 'text',
    unique: true,
  })
  matricula: string;

  @Column({
    type: 'text',
  })
  papel: string;
}
