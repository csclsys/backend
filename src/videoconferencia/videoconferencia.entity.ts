import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity( 'videoConferencia' )
export class VideoConferenciaEntity {
    @PrimaryGeneratedColumn()
    id: number;

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
