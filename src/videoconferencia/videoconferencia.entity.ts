import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm';
import { TemaEntity } from 'src/tema/tema.entity';

@Entity( 'videoConferencia' )
export class VideoConferenciaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TemaEntity)
    tema: TemaEntity;

    @Column( {
        type: 'timestamp',
    } )
    horaInicio: Date;

    @Column( {
        type: 'timestamp',
        nullable: true,
    } )
    horaFim: Date;
}
