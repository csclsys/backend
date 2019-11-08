import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { SalaEntity } from 'src/sala/sala.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity( 'respostaSala' )
export class RespostaSalaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany( type => RespostaSalaEntity, comentario => comentario.comentario )
    comentarios: RespostaSalaEntity[];

    @ManyToOne( type => RespostaSalaEntity )
    comentario: RespostaSalaEntity;

    @ManyToOne( type => UsuarioEntity )
    usuario: UsuarioEntity;

    @ManyToOne(type => SalaEntity)
    sala: SalaEntity;

    @Column( {
        type: 'timestamp',
    } )
    horarioResposta: Date;

    @Column( {
        type: 'text',
    } )
    texto: string;

    @Column( {
        type: 'integer',
    } )
    salaId: number;

    @Column( {
        type: 'integer',
        nullable: true,
    } )
    comentarioId: number;

    @Column( {
        type: 'integer',
    } )
    usuarioId: number;
}
