import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';

@Entity( 'respostaSala' )
export class RespostaSalaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany( type => RespostaSalaEntity, comentario => comentario.comentario )
    comentarios: RespostaSalaEntity[];

    @ManyToOne( type => RespostaSalaEntity )
    comentario: RespostaSalaEntity;

    @Column( {
        type: 'timestamp',
    } )
    horarioResposta: Date;

    @Column( {
        type: 'text',
    } )
    texto: string;
}
