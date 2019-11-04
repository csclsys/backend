import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity( 'sala' )
export class SalaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {
        type: 'text',
    } )
    descrPergunta: string;

    @Column( {
        type: 'text',
    } )
    tipo: string;

    @Column( {
        type: 'timestamp',
    } )
    dataAbertura: Date;

    @Column( {
        type: 'timestamp',
        nullable: true,
    } )
    dataFechamento: Date;
}
