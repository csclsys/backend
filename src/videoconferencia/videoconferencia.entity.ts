import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('videoConferencia')
export class VideoConferenciaEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({
        type: 'timestamp',
    })
    horaInicio: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    horaFim: Date;
}
