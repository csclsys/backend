import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { TurmaEntity } from 'src/turma/turma.entity';

@Entity({ name: 'matriculaAluno' })
export class MatriculaAlunoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( type => UsuarioEntity )
    usuario: UsuarioEntity;

    @ManyToOne( type => TurmaEntity )
    turma: TurmaEntity;

    @Column({
        type: 'integer',
    })
    turmaId: number;
    @Column({
        type: 'integer',
    })
    usuarioId: number;
}
