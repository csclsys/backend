import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity( 'tema' )
export class TemaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {
        type: 'text',
    } )
    nome: string;

    @Column( {
        type: 'text',
    } )
    situacao: string;

    @Column( {
        type: 'timestamp',
    } )
    dataInclusao: Date;

}
