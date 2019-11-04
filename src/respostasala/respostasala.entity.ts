import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity( 'respostaSala' )
export class RespostaSalaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {
        type: 'timestamp',
    } )
    horarioResposta: Date;

    @Column( {
        type: 'text',
    } )
    texto: string;
}
