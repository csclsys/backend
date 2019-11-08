import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
} from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { VideoConferenciaEntity } from 'src/videoconferencia/videoconferencia.entity';
import { SalaEntity } from 'src/sala/sala.entity';
import { DisciplinaEntity } from 'src/disciplina/disciplina.entity';

@Entity('tema')
export class TemaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => UsuarioEntity)
    proponente: UsuarioEntity;

    @ManyToOne(type => UsuarioEntity)
    aprovador: UsuarioEntity;

    @OneToMany(type => VideoConferenciaEntity, videoConferencia => videoConferencia.tema)
    videoConferencias: VideoConferenciaEntity[];

    @OneToMany(type => SalaEntity, sala => sala.tema)
    salas: SalaEntity[];

    @ManyToOne(type => DisciplinaEntity)
    disciplina: DisciplinaEntity;

    @Column({
        type: 'text',
    })
    nome: string;

    @Column({
        type: 'text',
    })
    situacao: string;

    @CreateDateColumn()
    created: Date;

    @Column({
        type: 'integer',
    })
    disciplinaId: number;

    @Column({
        type: 'integer',
    })
    proponenteId: number;

}
