import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { VideoConferenciaEntity } from 'src/videoconferencia/videoconferencia.entity';
import { SalaEntity } from 'src/sala/sala.entity';

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

    @Column({
        type: 'text',
    })
    nome: string;

    @Column({
        type: 'text',
    })
    situacao: string;

    @Column({
        type: 'timestamp',
    })
    dataInclusao: Date;

}
